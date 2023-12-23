<script setup>
import {RouterLink, RouterView, useRouter} from 'vue-router'
import {onMounted} from "vue";
import {useUserStore} from "@/stores/config";
const router=useRouter()
let store=useUserStore()
onMounted(()=>{
  router.beforeEach((to, from) => {
    // 而不是去检查每条路由记录
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth && !store.isLogin()) {
      // 此路由需要授权，请检查是否已登录
      // 如果没有，则重定向到登录页面
      return {
        path: '/login',
        // 保存我们所在的位置，以便以后再来
        // query: { redirect: to.fullPath },
      }
    }
  })
})

</script>
<template>
  <RouterView style="width: 100vw;padding: 0 0 0 0;margin: 0 0 0 0;"/>
</template>
<style>

.icon-location-box{
  width: 3.5vw;
  height: 3.5vw;
  margin: 0 1vw 0 3vw;
}
.h3Title{
  font-size: 4.2vw;
  font-weight: bold;
}
.h4Title{
  font-size: 3.4vw;
  font-weight: bold;
}
.h2Title{
  font-size: 5vw;
  font-weight: bold;
}
.h2WhiteTitle{
  font-size: 5vw;
  font-weight: lighter;
  color: white;
}
.score{
  color: darkorange;
  font-weight: 800;
  font-size: 3.6vw;
}
.bannerText{
  font-size: 3.4vw;
  color: #666666;
}
.bannerText2{
  font-size: 3.4vw;
  color: #888888;
}
.linkText{
  font-size: 3vw;
  color: #c79868;
  font-weight: bold;
}
.orangeTag{
  background-color: rgba(239, 130, 5, 0.32);
  border-radius: 3px;
  margin: 0 2vw 0 2vw;
  padding: 0.4vw 1.3vw 0.4vw 1.3vw;
}
.hollowTag{
  border: rgba(255, 0, 0, 0.4) 0.5px solid;
  border-radius: 2px;
  padding: 0.2vw 0.7vw 0.2vw 0.7vw;
}
.back{
  position: fixed;
  left: 2vw;
  top: 2.5vw;
}
</style>
