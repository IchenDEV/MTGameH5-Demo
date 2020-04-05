<template>
  <bottom-panel>
    <h2>好友</h2>
      <table class="tabs" style="width:100%">
        <tr>
          <td style="width:80%">名称</td>
          <td style="width:20%">等级</td>
        </tr>
        <tr>
          <a href="#" style="text-decoration:none;">
            <td style="color:#4D6AEB">法外狂徒_张三</td>
          </a>
          <td>23</td>
        </tr>
        <tr>
          <a href="#" style="text-decoration:none;">
            <td style="color:#4D6AEB">几何大师欧几里得</td>
          </a>
          <td>200</td>
        </tr>        
      </table>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
export default {
  name: "FriendView",
  components: { BottomPanel }
};
</script>
<style lang="less" scoped>
.tabs {
  border-radius: 2rem;
  overflow: hidden;
}
</style>
