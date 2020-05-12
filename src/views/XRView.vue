<template>
  <div class="about">
    <ar-view class="view">
      <ar-element :id="42">
        <fucard :show-button="true"></fucard>
      </ar-element>
      <ar-element :id="6">
        <fucard :show-button="true"></fucard>
      </ar-element>
    </ar-view>
    <game-button
      label="福卡"
      size="small"
      icon="icon-chengjiu"
      @click="$router.push('/fu')"
    ></game-button>
    <div class="back" @click="$router.push('/')">
      <h4 class="header">返回</h4>
    </div>
  </div>
</template>

<script>
import fucard from "../components/FuCard";
import GameButton from "../components/GameButton";
// @ is an alias to /src
export default {
  name: "XRView",
  components: {
    fucard,
    GameButton
  },
  mounted() {
    this.$store.state.showLive2D = false;
  }
};
</script>
<style lang="less" scoped>
.view {
  height: calc(100% - 7.2rem);
  width: 100%;
  background: transparent !important;
}
.about {
  background: #efeff4;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
