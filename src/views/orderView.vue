<template>
  <body>
  <div class="wrapper">
    <header>
      <a href="javascript:history.go(-1);" class="back">
        <el-icon color="white" size="5vw">
          <Back/>
        </el-icon>
      </a>
      <p>确认订单</p>
    </header>

    <div class="order-info">
      <h5 class="h4Title">订单配送至：</h5>
      <div class="order-info-address">
        <p>沈阳市浑南区智慧四街1-121号</p>
        <i class="fa fa-angle-right"></i>
      </div>
      <p>习近平先生 13656785432</p>
    </div>
    <div class="businessName" style="display: flex;align-items: center;">
      <h3 class="h3Title">万家饺子（软件园E18店）</h3>
    </div>

    <!-- 订单明细部分 -->
    <div class="order-detailed">
      <div class="order-item" v-for="food in store.foods">
        <div class="order-detailed-left" style="flex: 1">
          <img :src="food.foodImg">
        </div>
        <p class="bannerText" style="flex: 5">{{food.foodName}} </p>
        <p class="bannerText" style="flex: 0.6">&#165;{{food.foodPrice}}</p>
      </div>

    </div>
    <div class="order-deliveryfee">
      <p>配送费</p>
      <p>&#165;3</p>
    </div>
    <!-- 合计部分 -->
    <div class="total">
      <div class="total-left">
        &#165;{{foodSum}}
      </div>
      <div class="total-right" onclick="location.href='payment.html'">
        去支付
      </div>
    </div>
  </div>


  </body>
</template>

<script setup>
import {useBusinessStore,useUserStore} from "@/stores/config";
import {onMounted, ref} from "vue";
let store = useBusinessStore();
let userStore=useUserStore()
let foodSum=ref(3)

for (let i = 0; i < store.foods.length; i++) {
  foodSum.value+=store.foods[i].foodPrice
}
console.log(userStore.user)
</script>

<style scoped>
/****************** 总容器 ******************/
.wrapper {
  width: 100%;
  height: 100%;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  display: flex;
  flex-direction: column;
}

/****************** header部分 ******************/
.wrapper header {
  width: 100%;
  height: 12vw;
  background-color: #0097FF;
  color: #fff;
  font-size: 4.8vw;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
}

/****************** 订单信息部分 ******************/
.wrapper .order-info {
  /*注意这里，不设置高，靠内容撑开。因为地址有可能折行*/
  width: 100vw;
  margin-top: 12vw;
  background-color: #0097EF;
  box-sizing: border-box;
  padding: 1vw;
  color: #fff;
}

.wrapper .order-info h5 {
  font-size: 3vw;
  font-weight: 300;
}

.wrapper .order-info .order-info-address {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vw;
  font-weight: 700;
  user-select: none;
  cursor: pointer;
  margin: 1vw 0;
}

.wrapper .order-info .order-info-address p {
  width: 90%;
  font-size: 5vw;
}

.wrapper .order-info .order-info-address i {
  font-size: 6vw;
}

.wrapper .order-info p {
  font-size: 3vw;
}

.wrapper h3 {
  box-sizing: border-box;
  padding: 3vw;
  font-size: 4vw;
  color: #666;
  border-bottom: solid 1px #DDD;
}

/****************** 订单明细部分 ******************/
.wrapper .order-detailed {
  width: 100%;
}

.wrapper .order-detailed .order-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4vw;
}
.wrapper .order-detailed .order-item .order-detailed-left{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vw 2vw 2vw 2vw;
}
.wrapper .order-detailed .order-item .order-detailed-left img{
  width: 18vw;


}
.wrapper .order-deliveryfee {
  width: 100%;
  height: 16vw;
  box-sizing: border-box;
  padding: 3vw;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.5vw;
}

/****************** 订单合计部分 ******************/
.wrapper .total {
  width: 100%;
  height: 14vw;

  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
}

.wrapper .total .total-left {
  flex: 2;
  background-color: #505051;
  color: #fff;
  font-size: 4.5vw;
  font-weight: 700;

  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .total .total-right {
  flex: 1;
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
</style>