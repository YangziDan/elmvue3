<template>
  <!--  <div class="wrapper">-->
  <!--    &lt;!&ndash; header部分 &ndash;&gt;-->
  <!--    <header>-->
  <!--      <p>我的订单</p>-->
  <!--    </header>-->
  <!--    &lt;!&ndash; 订单列表部分 &ndash;&gt;-->
  <!--    <h3>未支付订单信息：</h3>-->
  <!--    <ul class="order">-->
  <!--      <li v-for="item in orderList">-->
  <!--        <div class="order-info">-->
  <!--          <p>-->
  <!--            {{item.business.businessName}}-->
  <!--            <i class="fa fa-caret-down" @click="detailetShow(item)"></i>-->
  <!--          </p>-->
  <!--          <div class="order-info-right">-->
  <!--            <p>&#165;{{item.orderTotal}}</p>-->
  <!--            <div class="order-info-right-icon">去支付</div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <ul class="order-detailet" v-show="item.isShowDetailet">-->
  <!--          <li v-for="odItem in item.list">-->
  <!--            <p>{{odItem.food.foodName}} x {{odItem.quantity}}</p>-->
  <!--            <p>&#165;{{odItem.food.foodPrice*odItem.quantity}}</p>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <p>配送费</p>-->
  <!--            <p>&#165;{{item.business.deliveryPrice}}</p>-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--    <h3>已支付订单信息：</h3>-->
  <!--    <ul class="order">-->
  <!--      <li v-for="item in orderArr" v-if="item.orderState==1">-->
  <!--        <div class="order-info">-->
  <!--          <p>-->
  <!--            {{item.business.businessName}}-->
  <!--            <i class="fa fa-caret-down" @click="detailetShow(item)"></i>-->
  <!--          </p>-->
  <!--          <div class="order-info-right">-->
  <!--            <p>&#165;{{item.orderTotal}}</p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <ul class="order-detailet" v-show="item.isShowDetailet">-->
  <!--          <li v-for="odItem in item.list">-->
  <!--            <p>{{odItem.food.foodName}} x {{odItem.quantity}}</p>-->
  <!--            <p>&#165;{{odItem.food.foodPrice*odItem.quantity}}</p>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <p>配送费</p>-->
  <!--            <p>&#165;{{item.business.deliveryPrice}}</p>-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--    &lt;!&ndash; 底部菜单部分 &ndash;&gt;-->
  <!--    <footer-comp></footer-comp>-->
  <!--  </div>-->
</template>

<script setup>
// import FooterComp from "@/components/homeViewComp/footerComp.vue";
// import {inject, onMounted, ref} from "vue";
// import axios from 'axios'
// import {useUserStore} from "@/stores/config";
// import cookie from "vue-cookies";
// let orderArr=ref([])
// let user=ref({})
// let baseUrl
// let store=useUserStore();
// let orderList=ref([])
// onMounted(()=>{
//   baseUrl=inject("baseUrl")
//   //
//   let userId=cookie.get('userId')
//   axios.get(baseUrl+"/orders",{
//     params:{
//       userId:userId
//     },headers:{
//       'Content-Type': 'multipart/form-data'
//     }
//   }).then(res=>{
//     orderList.value=res.data
//   })
//   //
// })

</script>

<style scoped>
/****************** 总容器 ******************/
.wrapper {
  width: 100%;
  height: 100%;
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

/****************** 历史订单列表部分 ******************/
.wrapper h3 {
  margin-top: 12vw;
  box-sizing: border-box;
  padding: 4vw;
  font-size: 4vw;
  font-weight: 300;
  color: #999;
}

.wrapper .order {
  width: 100%;
}

.wrapper .order li {
  width: 100%;
}

.wrapper .order li .order-info {
  box-sizing: border-box;
  padding: 2vw 4vw;
  font-size: 4vw;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper .order li .order-info .order-info-right {
  display: flex;
}

.wrapper .order li .order-info .order-info-right .order-info-right-icon {
  background-color: #f90;
  color: #fff;
  border-radius: 3px;
  margin-left: 2vw;
  user-select: none;
  cursor: pointer;
}

.wrapper .order li .order-detailet {
  width: 100%;
}

.wrapper .order li .order-detailet li {
  width: 100%;
  box-sizing: border-box;
  padding: 1vw 4vw;
  color: #666;
  font-size: 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
