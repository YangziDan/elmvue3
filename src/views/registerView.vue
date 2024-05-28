<template>
  <body style="overflow-x: hidden">
  <header>
    <p class="h2Title">
      注册页面
    </p>
  </header>
  <div class="wrapper">
    <div>&nbsp;</div>
    <div class="loginWrapper" style="margin-top: 20vh">
      <div class="inputWrapper">
        <p class="h3Title">邮箱</p>
        <input placeholder="2014344591@qq.com" v-model="account">
      </div>
      <div class="inputWrapper">
        <p class="h3Title">用户名</p>
        <input placeholder="请输入用户名" v-model="userName">
      </div>
      <div class="inputWrapper">
        <p class="h3Title">密码</p>
        <input placeholder="请输入密码" v-model="password">
      </div>
      <div class="inputWrapper">
        <p class="h3Title">性别</p>
        <input placeholder="请输入性别" v-model="userSex">
      </div>
      <div class="inputWrapper">
        <p class="h3Title">验证码</p>
        <input placeholder="请输入验证码" v-model="code">
      </div>

      <div class="buttonWrapper">
        <el-button round type="success" plain @click="verify()" class="myButton">
          <p>发送验证码</p>
        </el-button>
        <el-button round type="success" plain @click="register()" class="myButton">
          <p>注册</p>
        </el-button>
      </div>
    </div>

  </div>
  <footer-comp></footer-comp>
  </body>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import axios from "axios";
import {useUserStore} from "@/stores/config";
import {useRouter} from "vue-router";
import FooterComp from "@/components/homeViewComp/footerComp.vue";
import cookie from "vue-cookies";
import {ElNotification} from "element-plus";

let store = useUserStore();
const router = useRouter()

let account = ref('2014344591@qq.com')
let password = ref('123')
let code = ref('0')
let userName=ref('')
let userSex=ref('')
let baseUrl
onMounted(() => {
  baseUrl = inject('baseUrl')
})

function verify() {

  axios.post(baseUrl + "/verify", {
    "account": account.value
  }).then(res => {
    if(res.data==null||res.data=='')
    {
      ElNotification({
        title: '邮箱格式不正确！',
        type: 'warning',
      })
    }
    else{
      ElNotification({
        title: '成功发送邮件！',
        type: 'success',
      })
    }
  })
}

function register() {
  axios.post(baseUrl+ "/register", {
    "account": account.value,
    "password": password.value,
    "code": code.value,
    "userName":userName.value,
    "userSex":userSex.value
  }).then(res => {
    if (res.data == null || res.data == '') {
      ElNotification({
        title: '验证码错误或账户已经被注册',
        type: 'error',
      })
    } else {
      cookie.set('token',res.data)
      ElNotification({
        title: '注册成功！',
        type: 'success',
      })
      setTimeout(() => router.push({name: 'login'}), 1000)
    }
  })
}


</script>

<style scoped>
.h3Title{
  font-size: 4.2vw;
  font-weight: bold;
  width: 15vw;
}
.wrapper {
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  height: 100vw;
}

header {
  background-color: #0097FF;
  position: fixed;
  width: 100vw;
  height: 14vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.wrapper .loginWrapper {
  height: 70vw;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vw;


}

.wrapper .loginWrapper .inputWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 12vw;
  width: 100vw;
}

.wrapper .loginWrapper .inputWrapper input {
  width: 70vw;
  height: 10vw;
  border: 2px solid black;
  border-radius: 5px;
  margin: 0 5vw 0 5vw;
}

.wrapper .loginWrapper .registerWrapper {
  margin: 0 0 0 0;
  height: 5vw;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

}

.wrapper .loginWrapper .buttonWrapper {
  width: 100vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8vw 5vw 0 5vw;
}

.wrapper .loginWrapper .buttonWrapper .myButton {
  width: 22vw;
  height: 10vw;
  margin-left: 12vw;

}
</style>
