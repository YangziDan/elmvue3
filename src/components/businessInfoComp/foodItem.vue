<template>
  <div class="foodItem" id="foodItem">
    <img class="left" :src="food.foodImg" id="foodImg">
    <div class="mid">
      <p class="h4Title" id="foodName">{{ food.foodName }}</p>
      <p class="bannerText" id="foodExplain">{{food.foodExplain}}</p>
      <p class="bannerText">&yen<span id="foodPrice">{{food.foodPrice}}</span></p>
    </div>
    <div class="right">
      <div>
        <i class="fa fa-minus-circle" style="color: gray;" onclick="reduceNum(3)"></i>
      </div>
      <span id="foodNum">0</span>
      <div>
        <i class="fa fa-plus-circle" style="color: #0097FF" onclick="plusNum(3)"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  food:{
    type:Object,
    required:false
  }
})
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

}
</style>