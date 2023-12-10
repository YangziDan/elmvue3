<template>
<div class="wrapper">
  <el-image :src=imgUrl class="img" ></el-image>
  <p>{{name}}</p>
</div>
</template>

<script setup>
defineProps({
      imgUrl: {
        type: String,
        required: false,
        default: "url"
      },
      name: {
        type: String,
        required: false,
        default: "食物名称"
      },

    }
)
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.wrapper p{
  margin: 1.5vw 0 0 0;
  font-size: 2.4vw;
  font-weight: bold;
}
</style>