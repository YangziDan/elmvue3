<template>
  <div class="business" id="businessList">
    <div class="recommendItem" @click="enterBusinessInfo(business)" id="businessItem">
      <div class="left">
        <img class="businessImg" :src="business.businessImg" id="businessImg">
<!--        <div class="businessImgQuantity">1</div>-->
      </div>

      <div class="right">
        <div class="row">
          <p class="h4Title" id="businessName">{{business.businessName}}</p>
        </div>
        <div class="row">
          <p class="bannerText">起送{{business.starPrice}}&yen | </p>
          <p class="bannerText ">配送{{business.deliveryPrice}}&yen</p>
        </div>
        <div class="row">
          <p class="bannerText" id="businessExplain">{{business.businessExplain}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useBusinessStore} from "@/stores/config";
const router = useRouter()
function enterBusinessInfo(business){
  let store=useBusinessStore();
  store.business=business
  router.push({
    path:'/businessInfo'
  })
}
defineProps({
  business:{
    type:Object,
    required: false,
  }
})

</script>

<style scoped>
.business {
  width: 100vw;
  box-sizing: border-box;
  background-color: whitesmoke;
  /*margin: 3vw 2vw 3vw 2vw;*/
}

.business .recommendItem {
  width: 94vw;
  height: 30vw;
  display: flex;
  flex-direction: row;
  margin: 0 3vw 0 3vw;
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