<template>
  <div class="wrapper">
    <div class="part" style="flex: 1">
      <el-icon style="font-size: 4.5vw"><Search /></el-icon>
    </div>
    <div  class="part" style="flex: 8">
      <el-input  placeholder="请输入商品名称" style="height: 8vw;border: transparent;color: transparent;font-size: 3vw"></el-input>
    </div>
    <div class="part"  style="flex: 1.5">
      <el-button  type="primary" round style="height: 10vw;width: 100%"><p class="comFont">搜索</p></el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "searchPanel"
}
</script>

<style scoped>
.wrapper{
  width: 100%;
  height: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1vw 1vw 1vw 1vw;
  padding: 0 0 0 0;
  border: #0097FF solid;
  border-radius: 20px;
}
.part{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>