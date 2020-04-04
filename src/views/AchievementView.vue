<template>
  <bottom-panel>
    <h2>成就</h2>
    <el-tabs class="tabs" tab-position="left">
      <el-tab-pane label="成就1">
        <div>
          <p style="color:#9475FF;line-height:5px">成就1是这个游戏的第一个成就</p>
          <h4 style="line-height:5px;align:center;">当前进度</h4>
          <progress value="80" max="100"></progress>
        </div>
      </el-tab-pane>
      <el-tab-pane label="成就2">
          <div>
          <p style="color:#9475FF;line-height:5px">成就2是这个游戏的第二个成就</p>
          <h4 style="line-height:5px;align:center;">当前进度</h4>
          <progress value="60" max="100"></progress>
        </div>
      </el-tab-pane>
      <el-tab-pane label="成就3">
          <div>
          <p style="color:#9475FF;line-height:5px">成就3是这个游戏的第三个成就</p>
          <h4 style="line-height:5px;align:center;">当前进度</h4>
          <progress value="30" max="100"></progress>
        </div>
      </el-tab-pane>
    </el-tabs>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
export default {
  name: "AchieventView",
  components: { BottomPanel }
};
</script>
<style lang="less" scoped>
.tabs {
  border-radius: 2rem;
  overflow: hidden;
}
</style>
