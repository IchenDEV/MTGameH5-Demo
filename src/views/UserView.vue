<template>
  <bottom-panel>
    <h2>用户</h2>
    <h3>Lv 10</h3>
    <el-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    ></el-progress>
    <h3>801/1000</h3>
    <img src="/img/6x6_1000-6.svg" />
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
export default {
  name: "UserView",
  components: { BottomPanel }
};
</script>
