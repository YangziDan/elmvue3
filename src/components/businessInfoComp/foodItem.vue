<template>
  <div class="foodItem" v-if="isLoad(food)">
    <img class="left" :src="food.foodImg" >
    <div class="mid">
      <p class="h4Title">{{ food.foodName }}</p>
      <p class="bannerText" >{{ food.foodExplain }}</p>
      <p class="bannerText">&yen<span >{{ food.foodPrice }}</span></p>
    </div>
    <div class="right">
      <el-icon class="icon" @click="$emit('numChange',food,1);addFood()">
        <Plus/>
      </el-icon >
      <span >{{ foodNum }}</span>
      <el-icon class="icon" @click="$emit('numChange',food,-1);reduceFood()">
        <Minus/>
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import {useBusinessStore} from "@/stores/config";
import {onMounted, ref, toRef, toRefs} from "vue";
let foodNum=ref(0)
const props=defineProps({
  food: {
    type: Object,
    required: false
  }
})
function isLoad(food){
  if (food==null||food=='')
    return false
  return true
}
defineEmits(['numChange'])
let store = useBusinessStore();
function addFood(){
  foodNum.value+=1

}
function reduceFood(){
  foodNum.value=Math.max(foodNum.value-1,0)
}
</script>

<style scoped>

/*食物信息*/
.foodItem {
  width: 95vw;
  height: 20vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5vw;
  /*justify-content: center;*/
}

.foodItem img {
  height: 20vw;
  width: 20vw;
}

.foodItem .mid {
  margin-left: 2vw;
  width: 60vw;
}

.foodItem .right {
  width: 20vw;
  height: 20vw;
  margin-left: 8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 4vw;
}
.foodItem .right .icon{
  background: #0097FF ;
  border-radius: 5px;
  width: 5vw;
  height: 5vw;
  font-size: 3vw;
}

</style>
