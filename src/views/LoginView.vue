<template>
  <body style="overflow-x: hidden">
  <header>
    <p class="h2Title">
      登录
    </p>
  </header>
  <div class="wrapper">
    <div>&nbsp;</div>
    <div class="loginWrapper">
      <div class="inputWrapper">
        <p class="h3Title">账户</p>
        <input placeholder="请输入账户" v-model="account">
      </div>
      <div class="inputWrapper">
        <p class="h3Title">密码</p>
        <input placeholder="请输入密码" v-model="password">
      </div>
      <div class="registerWrapper">
        <p>没有账号?
          <router-link to="/register" style="color: blue">点击注册</router-link>
        </p>
      </div>
      <div class="buttonWrapper">
        <div class="myButton" @click="login()">
          <p>确认登录</p>
        </div>
      </div>
    </div>

  </div>
  <footer-comp></footer-comp>
  </body>
</template>

<script setup>
import cookie from 'vue-cookies'
import {inject, onMounted, ref} from "vue";
import axios from "axios";
import {useUserStore} from "@/stores/config";
import {useRouter} from "vue-router";
import FooterComp from "@/components/homeViewComp/footerComp.vue";
import {ElNotification} from "element-plus";

let store = useUserStore();
const router = useRouter()

let account = ref('1')
let password = ref('123')
let baseUrl
let token = cookie.get('token')
onMounted(() => {
  baseUrl = inject('baseUrl')
  if (store.isLogin()) {
    router.push({path: '/me'})
  }
})

function login() {
  let flag = false
  axios.post(baseUrl + "/login", {
    account: account.value,
    password: password.value
  }).then(function (response) {
    if (response.data != "" && response.data != null) {
      cookie.set('token', response.data)
      getUser()
    } else {
      ElNotification({
        title: '账户或密码错误！',
        type: 'warning',
      })
      cookie.set('token', '')
      //登录失败
    }
  })


}

function getUser() {
  axios.post(baseUrl + "/token", {
    token: cookie.get('token')
  }).then(function (response) {
    if (response.data != "" && response.data != null) {
      store.user.value = response.data

      cookie.set('userId', response.data.userId)
      router.push({
        path: '/me'
      })
    } else {
      cookie.set('userId', '')
      store.user = ''
      ElNotification({
        title: '账户或密码错误！',
        type: 'warning',
      })
      //登录失败
    }
  })
}
</script>

<style scoped>
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
  width: 25vw;
  height: 12vw;
  border-radius: 10px;
  background-color: #38CA73;
  display: flex;
  align-items: center;
  justify-content: center;

}

.wrapper .loginWrapper .buttonWrapper .myButton p {
  color: white;
}
</style>
