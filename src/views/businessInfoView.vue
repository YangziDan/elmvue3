<template>
  <div class="wrapper">
    <header>
      <a href="javascript:history.go(-1);" class="back">
        <el-icon color="white" size="5vw">
          <Back/>
        </el-icon>
      </a>
      <p class="h2WhiteTitle">商家信息</p>
    </header>
    <div class="businessInfo">
      <img class="businessImg" :src="business.businessImg" alt="">
      <p class="h2Title">
        {{ business.businessName }}
      </p>
      <p class="bannerText">起送<span> {{ business.starPrice }}</span>&yen
        配送&yen<span>{{ business.deliveryPrice }}</span></p>
      <p class="bannerText">{{ business.businessExplain }}</p>
    </div>

    <div class="cart">
      <div class="cart-left">
        <div class="cart-left-icon">
          <el-icon>
            <ShoppingCart/>
          </el-icon>
          <div class="cart-left-icon-quantity">{{ foodCount }}</div>
        </div>
        <div class="cart-left-info">
          <div class="row">
            <p class="h2WhiteTitle">&#165;</p>
            <p class="h2WhiteTitle"><span>{{ foodSum }}</span></p>
          </div>
          <p class="bannerText2">另需配送费3元</p>
        </div>
      </div>
      <div class="cart-right">
        <!--        <div class="cart-right-item" @click="location.href='order.html'">-->
        <div class="cart-right-item" @click="$emit('onPay',buyFoodList,foodSum,foodCount);payFood()">
          去结算
        </div>
      </div>
    </div>
    <div class="foodList" v-for="food in foodList">
      <food-item :food="food" @numChange="numChangePerformed"></food-item>
    </div>
    <div style="width: 100vw;height: 14vw"></div>
  </div>
</template>

<script setup>
import { useBusinessStore } from "@/stores/config";
import { inject, onMounted, ref, watch } from "vue";
import axios from "axios";
import FoodItem from "@/components/businessInfoComp/foodItem.vue";
import router from "@/router";
import { Back, ShoppingCart } from "@element-plus/icons-vue";

let store = useBusinessStore();
let business = store.business;
let businessId = store.business.businessId;
let foodList = ref([]);
let buyFoodList = ref(getFromLocalStorage("buyFoodList", [])); // 初始化购物车从本地存储中获取
let foodSum = ref(0);
let foodCount = ref(buyFoodList.value.length);
buyFoodList.value = getFromLocalStorage("buyFoodList", []).map(food => ({
  ...food,
  quantity: 1 // 默认每种食物至少有1份
}));
function getFromLocalStorage(key, defaultValue) {
  const value = localStorage.getItem(key);
  return JSON.parse(localStorage.getItem(key)) || defaultValue;
}

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function numChangePerformed({ food, quantity }) {
  let existingFood = buyFoodList.value.find(item => item.foodId === food.foodId);
  food.quantity += quantity;
  if (existingFood) {
    // 更新现有食物的数量
    existingFood.quantity += quantity;
    if (existingFood.quantity <= 0) {
      buyFoodList.value = buyFoodList.value.filter(item => item !== existingFood);
    }
  } else if (quantity > 0) {
    // 添加新食物到购物车
    buyFoodList.value.push({ ...food, quantity });

  }

  // 重新计算总价和数量
  foodCount.value = buyFoodList.value.reduce((total, item) => total + item.quantity, 0);
  calculateTotal();
  saveToLocalStorage("buyFoodList", buyFoodList.value);
}

onMounted(() => {
  axios.get(inject('baseUrl') + '/allFood', {
    params: {
      businessId: businessId
    }
  }).then(response => {
    foodList.value = response.data;
    calculateTotal(); // 计算初始总价
  });
});

// 新增计算总价的方法
function calculateTotal() {
  foodSum.value = buyFoodList.value.reduce((sum, food) => sum + food.foodPrice * food.quantity, 0);
}

// 更新watcher以触发计算总价
watch(
    () => buyFoodList.value,
    (newVal) => {
      foodCount.value = newVal.length;
      saveToLocalStorage("buyFoodList", newVal);
      calculateTotal(); // 购物车数据变化时重新计算总价
    },
    { deep: true }
);

function payFood() {
  store.foods = buyFoodList;
  router.push({ path: "/order" });
}
</script>

<style scoped>
/*总容器*/
/*总容器样式*/
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/*头部样式*/
.wrapper header {
  background-color: #0097FF;
  display: flex;
  width: 100%;
  height: 12vw;
  align-items: center;
  justify-content: center;

}

/*商家信息*/
.wrapper .businessInfo {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vw;

}

.wrapper .businessInfo p {
  margin: 1vw 0 0 0;
}

.wrapper .businessInfo img {

  width: 28vw;
  height: 26vw;
}

.wrapper .cart {
  width: 100%;
  height: 14vw;
  z-index: 1000;
  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
}

.wrapper .cart .cart-left {
  flex: 2;
  background-color: #505051;
  display: flex;
}

.wrapper .cart .cart-left .cart-left-icon {
  width: 16vw;
  height: 16vw;
  box-sizing: border-box;
  border: solid 1.6vw #444;
  border-radius: 8vw;
  background-color: #3190E8;
  font-size: 7vw;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: -4vw;
  margin-left: 3vw;

  position: relative;
}

.wrapper .cart .cart-left .cart-left-icon-quantity {
  width: 5vw;
  height: 5vw;
  border-radius: 2.5vw;
  background-color: red;
  color: #fff;
  font-size: 3.6vw;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: -1.5vw;
  top: -1.5vw;
}

.wrapper .cart .cart-left .cart-left-info {
  height: 14vw;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wrapper .cart .cart-left .cart-left-info .row {
  margin: 0 0 0 0;
  height: 8vw;
  display: flex;
  flex-direction: row;
}


.wrapper .cart .cart-right {
  flex: 1;
}

/*达到起送费时的样式*/
.wrapper .cart .cart-right .cart-right-item {
  width: 100%;
  height: 100%;
  background-color: #38CA73;
  color: #fff;
  font-size: 4.5vw;
  font-weight: 700;
  user-select: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

/*食物列表*/
.foodList {
  width: 100vw;
  display: flex;
  margin: 0.3vw 0 0 0;
  justify-content: center;
  flex-direction: column;
}

</style>
