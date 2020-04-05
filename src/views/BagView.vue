<template>
  <bottom-panel>
    <h2>背包</h2>
    <el-tabs class="tabs" tab-position="left">
      <el-tab-pane label="食物" class="stab">
        <h4 @click="isShow = isShow == 11 ? -1 : 11">小鱼干</h4>
        <el-button v-if="isShow == 11">使用</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 12 ? -1 : 12">冻干</h4>
        <el-button v-if="isShow == 12">使用</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 13 ? -1 : 13">罐头</h4>
        <el-button v-if="isShow == 13">使用</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 14 ? -1 : 14">帝王蟹</h4>
        <el-button v-if="isShow == 14">使用</el-button>
      </el-tab-pane>
      <el-tab-pane label="饮料" class="stab">
        <h4 @click="isShow = isShow == 8 ? -1 : 8">白开水</h4>
        <el-button v-if="isShow == 8">使用</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 9 ? -1 : 9">卡布奇诺</h4>
        <el-button v-if="isShow == 9">使用</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 10 ? -1 : 10">猫屎咖啡</h4>
        <el-button v-if="isShow == 10">使用</el-button>
      </el-tab-pane>
      <el-tab-pane label="皮肤" class="stab">
        <h4 @click="isShow = isShow == 4 ? -1 : 4">折耳</h4>
        <el-button v-if="isShow == 4">使用</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 5 ? -1 : 5">布偶</h4>
        <el-button v-if="isShow == 5">使用</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 6 ? -1 : 6">英短</h4>
        <el-button v-if="isShow == 6">使用</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 7 ? -1 : 7">美短</h4>
        <el-button v-if="isShow == 7">使用</el-button>
      </el-tab-pane>
      <el-tab-pane label="优惠券" class="stab">
        <h4 @click="isShow = isShow == 0 ? -1 : 0">9折优惠券</h4>
        <el-button v-if="isShow == 0">使用</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 1 ? -1 : 1">8.8折优惠券</h4>
        <el-button v-if="isShow == 1">使用</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 2 ? -1 : 2">8.5折优惠券</h4>
        <el-button v-if="isShow == 2">使用</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 3 ? -1 : 3">8折优惠券</h4>
        <el-button v-if="isShow == 3">使用</el-button>
      </el-tab-pane>
    </el-tabs>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
export default {
  name: "BagView",
  components: { BottomPanel },
  data() {
    return {
      isShow: -1
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
  height: 200px;
  overflow: auto;
}
</style>
