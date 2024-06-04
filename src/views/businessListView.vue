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
    <business-list style="margin: 12vw 0 0 0 "></business-list>
  </div>

</template>

<script setup>

import BusinessList from "@/components/homeViewComp/businessList.vue";
import {Back} from "@element-plus/icons-vue";
</script>

<style scoped>
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
  position: fixed;
}

</style>