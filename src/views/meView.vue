<template>
  <body>

  <header>
    <a href="javascript:history.go(-1);" class="back"><i class="fa fa-angle-left" style="font-size: 8vw"> </i></a>
    <p class="h2Title">
      我的
    </p>
  </header>
  <el-button @click="quit()" type="danger" style="position: fixed;right:2vw;top: 1.5vh">退出登录</el-button>
  <div class="wrapper">
    <div class="topInfo" >
      <div class="left" style="flex: 3;">
        <img  width="100" :src="userImg"  alt="">
      </div>
      <div class="right" style="flex: 7">
        <p class="h2Title" >{{user.userName}}</p>
        <p class="h2Title">{{user.userSex}}</p>
        <div class="VIPBorder" v-if="user.type=='会员'">
          <p>VIP</p>
        </div>
      </div>
    </div>
    <footer-comp></footer-comp>
  </div>
  </body>

</template>

<script setup>
import FooterComp from "@/components/homeViewComp/footerComp.vue";
import {inject, onMounted, ref} from "vue";
import {useUserStore} from "@/stores/config";
import axios from "axios";
import cookie from "vue-cookies";
import router from "@/router";
let user=ref(Object())
let userImg=ref('')
let sex=ref('男')
let baseUrl
onMounted(()=>{
  baseUrl=inject('baseUrl')
  axios.post(baseUrl+'/token',{
    'token':cookie.get('token')
  }).then(res=>{
    user= res.data
    userImg.value=user.userImg
    if(user==null||user=="")
      return
    if(user.userSex===0){
      user.userSex='女'
    }else {
      user.userSex='男'
    }
  })
})
function quit() {
  cookie.set('token','')
  router.push({path:'login'});
}
</script>

<style scoped>
.wrapper{
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  height: 100vw;
  margin: 0 0 0 0;

}
header{
  background-color: #0097FF;
  position: fixed;
  width: 100vw;
  height: 14vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 0;
}
.wrapper .topInfo{
  margin-top: 10vh;
  width: 100vw;
  height: 25vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}
.wrapper .topInfo .left{
  margin: 0 0 0 0;
  height: 25vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.wrapper .topInfo .right{
  margin: 0 0 0 0;
  height: 25vw;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  justify-content: center;
}
.wrapper .topInfo .right .VIPBorder{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10vw;
  height: 5vw;
  border: red 1px solid;
  border-radius: 10px;
}
.wrapper .topInfo .right .VIPBorder p{
  color: red;
  font-size: 3vw;
  font-weight: bolder;
}
.wrapper .footer{
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
.wrapper .footer div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #858585;
  cursor: pointer;

}
.wrapper .footer div p{
  margin: 1vw;
  font-size: 2.8vw;
}
.wrapper .footer div i{
  font-size: 5vw;
}
</style>
