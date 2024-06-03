<template>
  <div class="superMember">
    <div class="left">
      <img src="../../assets/img/super_member.png" style="width: 7vw;height: 7vw">
      <h3 class="h3Title">超级会员</h3>
      <p class="comFont">·每月享超值权益</p>
    </div>
    <div class="right">
      <a class="comFont">立即开通></a>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const a = ref("1")
</script>
<style scoped>
.superMember {
  height: 11.5vw;
  width: 95vw;
  margin: 1vw 0 0 2.5vw;
  /*border: 1px red solid;*/
  background-color: #FEEDC1;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.superMember .left {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 0;
}

.superMember .right {
  margin-left: 3vw;
  display: flex;
  flex-direction: row;
  align-items: center;
}

</style>