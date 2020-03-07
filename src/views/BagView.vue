<template>
  <bottom-panel>
    <h2>背包</h2>
    <el-tabs class="tabs" tab-position="left">
      <el-tab-pane label="食物">用户管理</el-tab-pane>
      <el-tab-pane label="饮料">配置管理</el-tab-pane>
      <el-tab-pane label="服装">角色管理</el-tab-pane>
      <el-tab-pane label="优惠券">定时任务补偿</el-tab-pane>
    </el-tabs>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
export default {
  name: "BagView",
  components: { BottomPanel }
};
</script>
<style lang="less" scoped>
.tabs {
  border-radius: 2rem;
  overflow: hidden;
}
</style>
