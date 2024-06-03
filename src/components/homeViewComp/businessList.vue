<script setup>
import {inject, onMounted, ref} from "vue";
import BusinessItem from "@/components/homeViewComp/businessItem.vue";
import axios from 'axios'

let businesses = ref([])
// let bus=useBusinessStore()
onMounted(() => {
  axios.get(inject('baseUrl') + '/allBusiness').then(function (response) {
    // 处理成功情况
    // businesses=response.data
    // console.log(response.data)
    businesses.value = response.data
    // console.log(businesses.value)
  })
})
</script>

<template>
  <div>
    <ui v-for="business in businesses">
      <businessItem :business="business"></businessItem>
    </ui>
  </div>
</template>


<style scoped>

</style>