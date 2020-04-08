<template>
  <bottom-panel>
    <h2>背包</h2>
    <el-tabs class="tabs" tab-position="left">
      <el-tab-pane label="食物" class="stab flex-containerX">
        <bag-item :key="item" v-for="item in foods" :label="item"></bag-item>
      </el-tab-pane>
      <el-tab-pane label="皮肤" class="stab flex-containerX">
        <bag-item label="折耳"></bag-item>
        <bag-item label="布偶"></bag-item>
        <bag-item label="英短"></bag-item>
        <bag-item label="美短"></bag-item>
        <bag-item label="折耳"></bag-item>
      </el-tab-pane>
      <el-tab-pane label="优惠券" class="stab flex-containerX">
        <bag-item label="折耳"></bag-item>
        <bag-item label="9折优惠"></bag-item>
        <bag-item label="8.8折优惠券"></bag-item>
        <bag-item label="折耳"></bag-item>
      </el-tab-pane>
    </el-tabs>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
import BagItem from "../components/BagItem";
export default {
  name: "BagView",
  components: { BottomPanel, BagItem },
  data(){
    return {
      foods: [
        "小鱼干",
        "冻干",
        "罐头",
        "帝王蟹",
        "白开水",
        "卡布奇诺",
        "猫屎咖啡"
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.tabs {
  border-radius: 2rem;
  overflow: hidden;
}
.stab {
  padding-bottom: 10rem;
  overflow: scroll;
}
</style>
