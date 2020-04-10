<template>
  <div class="about">
    <ar-view class="view">
      <ar-element :id="42">
        <fucard></fucard>
      </ar-element>
    </ar-view>
    <div class="back" @click="$router.push('/')">
      <h4 class="header">返回</h4>
    </div>
  </div>
</template>

<script>
import fucard from "../components/FuCard";
// @ is an alias to /src
export default {
  name: "XRView",
  components: {
    fucard
  }
};
</script>
<style lang="less" scoped>
.view {
  height: calc(100% - 5rem);
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
