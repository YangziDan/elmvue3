<template>
  <div class="business" id="businessList">
    <div class="recommendItem" onclick="findBusinessList()" id="businessItem">
      <div class="left">
        <img class="businessImg" src="src/assets/img/sj01.png" id="businessImg">
        <div class="businessImgQuantity">1</div>
      </div>

      <div class="right">
        <div class="row">
          <p class="h4Title" id="businessName">name</p>
        </div>
        <div class="row">
          <p class="bannerText">起送start &yen | </p>
          <p class="bannerText ">配送&yen price</p>
        </div>
        <div class="row">
          <p class="bannerText" id="businessExplain">ex</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import {ref} from "vue";

// defineProps({
//   Business{
//     'businessId':"",
//     'businessName':"",
//     'businessAddress':"",
//     'businessExplain':"",
//     'businessImg':"",
//     'orderTypeId':123456,
//     'starPrice':17.5, //起送费
//     'deliveryPrice':3.1,//配送费
//     'remarks':""
//   }
// })
</script>

<style scoped>
.business {
  width: 100vw;
  box-sizing: border-box;
  margin-bottom: 7vw;
  background-color: whitesmoke;
  /*margin: 3vw 2vw 3vw 2vw;*/
}

.business .recommendItem {
  width: 94vw;
  height: 30vw;
  display: flex;
  flex-direction: row;
  margin:3vw 3vw 3vw 3vw ;
}

.business .recommendItem .left {
  width: 18vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
}

.business .recommendItem .left img {
  width: 18vw;
  height: 18vw;
  /*margin: 0 0 0 2vw;*/

}

.business .recommendItem .right {
  width: 70vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
}

.business .recommendItem .right .row {
  display: flex;
  width: 70vw;
  flex-direction: row;
  font-size: 1vw;
  flex-wrap: nowrap;
  padding-left: 2vw;
  margin: 0 0 0 0;
  height: 6vw;
  align-items: center;
}

.business .recommendItem .right .row p {

  margin-left: 0.7vw;
}

/*底部样式*/
.footer {
  position: fixed;
  left: 0;
  bottom: 0.01vw;
  width: 100vw;
  height: 14vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #DDD;
  background-color: white;
  box-sizing: border-box
}

.footer div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #858585;
  cursor: pointer;

}

.footer div p {
  margin: 1vw;
  font-size: 2.8vw;
}

.footer div i {
  font-size: 5vw;
}
</style>