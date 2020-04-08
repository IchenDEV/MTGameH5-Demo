<template>
   <div class="about">
    <ar-view class="view">
      <ar-element :id="42">
        <div class="hello">敬业福</div>
      </ar-element>
    </ar-view>
    <div class="back" @click="$router.push('/')">
      <h4 class="header">返回</h4>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "XRView"
};
</script>
<style lang="less" scoped>
.view {
  height: 100%;
  widows: 80%;
}
.about {
  background: #efeff4;
  height: 100%;
  width: 100%;
  position: absolute;
}
.hello{
    margin-top:-50px;
    height: 100px;
    widows: 100px;
    background: white;
    opacity: 0.6;
}
</style>
