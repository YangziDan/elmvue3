<script setup lang="ts">
import HeadComp from "@/components/homeViewComp/headComp.vue";
import FooterComp from "@/components/homeViewComp/footerComp.vue";
import SearchPanel from "@/components/homeViewComp/searchPanel.vue";
import FoodTypes from "@/components/homeViewComp/foodTypes.vue";
import AdvertismentItem from "@/components/homeViewComp/AdvertismentItem.vue";
import SuperMember from "@/components/homeViewComp/superMember.vue";
import RecommendItem from "@/components/homeViewComp/recommendItem.vue";
import BusinessList from "@/components/homeViewComp/businessList.vue";
import {inject, onMounted} from "vue";
import {useBusinessStore} from "@/stores/config";
let userstore=useBusinessStore()
onMounted(()=>{
  // userstore.checkLogin()
})
</script>
<template>
  <test-view></test-view>
  <div>
    <el-row>
      <head-comp></head-comp>
    </el-row>
    <el-row>
      <search-panel></search-panel>
    </el-row>
    <el-row>
      <food-types></food-types>
    </el-row>
    <el-row>
      <AdvertismentItem></AdvertismentItem>
    </el-row>
    <el-row>
      <super-member></super-member>
    </el-row>
    <el-row>
      <recommend-item></recommend-item>
    </el-row>
    <el-row>
      <business-list></business-list>
    </el-row>
    <div style="width: 100vw;height: 15vw"></div>
    <footer-comp style="position: fixed;bottom: 0;"></footer-comp>
  </div>

</template>
<style scoped>
el-row{
  margin: 3vw 0 0 0;
}
</style>
