<template>
    <div class="foodList" v-for="food in foodList">
      <food-item :food="food"></food-item>
    </div>
  <div style="width: 100vw;height: 14vw"></div>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import {useBusinessStore} from "@/stores/config";
import axios from "axios";
import FoodItem from "@/components/businessInfoComp/foodItem.vue";
let store = useBusinessStore();
let businessId=store.business.businessId
let foodList=ref([])
onMounted(()=>{
  axios.get(inject('baseUrl')+'/allFood',{
    params: {
      businessId: businessId
    }
  }).then(function (response) {
    // 处理成功情况
    foodList.value=response.data
    // console.log('foodlist is '+foodList.value[1].foodImg)
  })
})


</script>

<style scoped>

/*食物列表*/
.foodList {
  width: 100vw;
  display: flex;
  margin: 0.3vw 0 0 0;
  justify-content: center;
  flex-direction: column;
}


</style>