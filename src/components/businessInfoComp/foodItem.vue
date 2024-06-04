<template>
  <div class="foodItem" v-if="isLoad(food)">
    <img class="left" :src="food.foodImg">
    <div class="mid">
      <p class="h4Title">{{ food.foodName }}</p>
      <p class="bannerText">{{ food.foodExplain }}</p>
      <p class="bannerText">&yen<span>{{ food.foodPrice }}</span></p>
    </div>
    <div class="right">
      <el-icon class="icon" @click="increaseQuantity">
        <Plus/>
      </el-icon>
      <span>{{ localQuantity }}</span>
      <el-icon class="icon" @click="decreaseQuantity" :disabled="localQuantity <= 0">
        <Minus/>
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  food: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['numChange']);
const localQuantity = ref( 0); // 使用局部状态追踪数量

function increaseQuantity() {
  localQuantity.value++;
  emit('numChange', { food: props.food, quantity: 1 });
}

function decreaseQuantity() {
  emit('numChange', { food: props.food, quantity: -1 });
  if (localQuantity.value > 0) {
    localQuantity.value--;
  }
}

function isLoad(food) {
  return food !== null && food !== '';
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

.foodItem .right .icon {
  background: #0097FF;
  border-radius: 5px;
  width: 5vw;
  height: 5vw;
  font-size: 3vw;
}

</style>
