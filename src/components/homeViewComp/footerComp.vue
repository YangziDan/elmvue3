<template>
  <div class="footer">
    <div @click="toHome()">
      <el-icon :size=iconSize>
        <House/>
      </el-icon>
      <p>首页</p>
    </div>
    <div>
      <el-icon :size=iconSize>
        <View/>
      </el-icon>
      <p>发现</p>
    </div>
    <div>
      <el-icon :size=iconSize>
        <Tickets/>
      </el-icon>
      <p>订单</p>
    </div>
    <div @click="toLogin()">
      <el-icon :size=iconSize>
        <User/>
      </el-icon>
      <p>我的</p>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

let router = useRouter()
const iconSize = ref("5vw")

function toLogin() {
  router.push({
    path: '/login'
  })
}

function toHome() {
  router.push({
    path: '/'
  })
}
</script>

<style scoped>
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
</style>