<template>
  <div class="recommend">
    <div class="recommend-line"></div>
    <p class="comFont">推荐商家</p>
    <div class="recommend-line"></div>
  </div>
  <div class="recommendType">
    <div>综合排序
      <el-icon>
        <ArrowDownBold/>
      </el-icon>
    </div>
    <div>距离最近</div>
    <div>销量最高</div>
    <div>筛选
      <el-icon style="font-size: 3vw">
        <Sort/>
      </el-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendItem"
}
</script>

<style scoped>
.recommend {
  width: 100vw;
  /*border: 1px red solid;*/
  height: 14vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.recommend .recommend-line {
  height: 0.2vw;
  width: 6vw;
  background-color: #888888;
  margin: 0 2vw 0 2vw;

}

.recommendType {
  width: 95vw;
  /*border: 1px red solid;*/
  height: 6vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 3.5vw;
  color: #555555;
  margin-bottom: 5vw;
}
</style>