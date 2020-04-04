<template>
  <bottom-panel>
    <h2>商城</h2>
    <el-tabs class="tabs" tab-position="left">
      <el-tab-pane label="食物">食物</el-tab-pane>
      <el-tab-pane label="饮料">饮料</el-tab-pane>
      <el-tab-pane label="皮肤">皮肤</el-tab-pane>
      <el-tab-pane label="优惠券">优惠券</el-tab-pane>
      <el-tab-pane label="积分捐赠">积分捐赠</el-tab-pane>
    </el-tabs>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
export default {
  name: "StoreView",
  components: { BottomPanel }
};
</script>
<style lang="less" scoped>
.tabs {
  border-radius: 2rem;
  overflow: hidden;
}
</style>
