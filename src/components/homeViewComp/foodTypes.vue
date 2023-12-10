<template>
  <div class="wrapper">
    <div class="wrapperRow">
      <food-type-item img-url="src/assets/img/dcfl01.png" name="美食" class="foodItem"></food-type-item>
      <food-type-item img-url="src/assets/img/dcfl02.png" name="早餐" class="foodItem"></food-type-item>
      <food-type-item img-url="src/assets/img/dcfl03.png" name="跑腿代购" class="foodItem"></food-type-item>
      <food-type-item img-url="src/assets/img/dcfl04.png" name="汉堡披萨" class="foodItem"></food-type-item>
      <food-type-item img-url="src/assets/img/dcfl05.png" name="甜品饮品" class="foodItem"></food-type-item>
    </div>
    <div class="wrapperRow">
      <food-type-item img-url="src/assets/img/dcfl06.png" name="速食简餐" class="foodItem"></food-type-item>
      <food-type-item img-url="src/assets/img/dcfl07.png" name="地方小吃" class="foodItem"></food-type-item>
      <food-type-item img-url="src/assets/img/dcfl08.png" name="米粉面馆" class="foodItem"></food-type-item>
      <food-type-item img-url="src/assets/img/dcfl09.png" name="包子粥铺" class="foodItem"></food-type-item>
      <food-type-item img-url="src/assets/img/dcfl10.png" name="炸鸡炸串" class="foodItem"></food-type-item>
    </div>
  </div>


</template>

<script>
import FoodTypeItem from "@/components/homeViewComp/foodTypeItem.vue";
export default {
  name: "foodTypes",
  components: {FoodTypeItem}
}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
}
.wrapperRow{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90vw;
}
.foodItem{
  width: 15vw;
  height: 15vw;
  margin: 0 2vw 0 0 ;
}
</style>