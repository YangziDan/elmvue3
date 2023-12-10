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
      <img class="businessImg" :src="business.businessImg">
      <p class="h2Title">
        {{ business.businessName }}
      </p>
      <p class="bannerText">起送<span> {{business.starPrice}}</span>&yen 配送&yen<span>{{business.deliveryPrice}}</span></p>
      <p class="bannerText">{{business.businessExplain}}</p>
    </div>
    <div class="foodList" id="foodList">
      <div class="foodItem" id="foodItem">
        <img class="left" src="../img/sp03.png" id="foodImg">
        <div class="mid">
          <p class="h4Title" id="foodName">食物名字</p>
          <p class="bannerText" id="foodExplain">食物简介</p>
          <p class="bannerText">&yen<span id="foodPrice">食物价格</span></p>
        </div>
        <div class="right">
          <div>
            <i class="fa fa-minus-circle" style="color: gray;" onclick="reduceNum(3)"></i>
          </div>
          <span id="foodNum">0</span>
          <div>
            <i class="fa fa-plus-circle" style="color: #0097FF" onclick="plusNum(3)"></i>
          </div>
        </div>
      </div>


    </div>
    <div class="cart">
      <div class="cart-left">
        <div class="cart-left-icon">
          <i class="fa fa-shopping-cart"></i>
          <div class="cart-left-icon-quantity" id="foodSum">0</div>
        </div>
        <div class="cart-left-info">
          <div class="row">
            <p class="h2WhiteTitle">&#165;</p>
            <p class="h2WhiteTitle"><span id="sumMoney">0</span></p>

          </div>

          <p class="bannerText2">另需配送费3元</p>
        </div>
      </div>
      <div class="cart-right">
        <!-- 不够起送费 -->
        <!--
        <div class="cart-right-item">
        &#165;15起送
        </div>
        -->
        <!-- 达到起送费 -->
        <!--            <div class="cart-right-item" onclick="location.href='order.html'">-->
        <!--                去结算-->
        <!--            </div>-->
        <div class="cart-right-item" onclick="location.href='order.html'">
          去结算
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useBusinessStore} from "@/stores/config";
let store = useBusinessStore();
let business=store.business
onMounted(() => {
  // business=
  console.log(business.businessName)
})
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

/*食物列表*/
.wrapper .foodList {
  width: 100vw;
  display: flex;
  margin-bottom: 13vw;
  justify-content: center;
  flex-direction: column;
}

/*食物信息*/
.wrapper .foodList .foodItem {
  width: 95vw;
  height: 20vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5vw;
  /*justify-content: center;*/
}

.wrapper .foodList .foodItem img {
  height: 20vw;
  width: 20vw;
}

.wrapper .foodList .foodItem .mid {
  margin-left: 2vw;
  width: 60vw;
}

.wrapper .foodList .foodItem .right {
  width: 20vw;
  height: 20vw;
  margin-left: 8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

}

.wrapper .cart {
  width: 100%;
  height: 14vw;

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

</style>