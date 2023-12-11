<template>
<div class="wrapper" @click="toBusinessList">
  <el-image :src=imgUrl class="img" ></el-image>
  <p>{{name}}</p>
</div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useBusinessStore} from "@/stores/config";

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


const router = useRouter()
function toBusinessList() {
  router.push({
    path:'/businessList'
  })
}
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