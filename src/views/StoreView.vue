<template>
  <bottom-panel>
    <h2>商城</h2>
    <link
      rel="stylesheet"
      href="https://at.alicdn.com/t/font_1734945_hjbc2vctox.css"
    />
    <el-tabs class="tabs" tab-position="left">
      <el-tab-pane label="食物" class="stab">
        <h4 @click="isShow = isShow == 11 ? -1 : 11">小鱼干</h4>
        <el-button v-if="isShow == 11">购买</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 12 ? -1 : 12">冻干</h4>
        <el-button v-if="isShow == 12">购买</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 13 ? -1 : 13">罐头</h4>
        <el-button v-if="isShow == 13">购买</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 14 ? -1 : 14">帝王蟹</h4>
        <el-button v-if="isShow == 14">购买</el-button>
      </el-tab-pane>
      <el-tab-pane label="饮料" class="stab">
        <h4 @click="isShow = isShow == 8 ? -1 : 8">白开水</h4>
        <el-button v-if="isShow == 8">购买</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 9 ? -1 : 9">卡布奇诺</h4>
        <el-button v-if="isShow == 9">购买</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 10 ? -1 : 10">猫屎咖啡</h4>
        <el-button v-if="isShow == 10">购买</el-button>
      </el-tab-pane>
      <el-tab-pane label="皮肤" class="stab">
        <h4 @click="isShow = isShow == 4 ? -1 : 4">折耳</h4>
        <el-button v-if="isShow == 4">购买</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 5 ? -1 : 5">布偶</h4>
        <el-button v-if="isShow == 5">购买</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 6 ? -1 : 6">英短</h4>
        <el-button v-if="isShow == 6">购买</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 7 ? -1 : 7">美短</h4>
        <el-button v-if="isShow == 7">购买</el-button>
      </el-tab-pane>
      <el-tab-pane label="优惠券" class="stab">
        <h4 @click="isShow = isShow == 0 ? -1 : 0">9折优惠券</h4>
        <el-button v-if="isShow == 0">购买</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 1 ? -1 : 1">8.8折优惠券</h4>
        <el-button v-if="isShow == 1">购买</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 2 ? -1 : 2">8.5折优惠券</h4>
        <el-button v-if="isShow == 2">购买</el-button>
        <hr
          style="FILTER: alpha(opacity=100,finishopacity=0,style=1)"
          width="80%"
          SIZE="3"
        />
        <h4 @click="isShow = isShow == 3 ? -1 : 3">8折优惠券</h4>
        <el-button v-if="isShow == 3">购买</el-button>
      </el-tab-pane>
      <el-tab-pane label="积分捐赠" class="stab">
        <div class="+-" style="text-align:center;line-height:120px;" id="app">
          <span
            class="iconfont icon-arrow_back"
            style="font-size:50px;"
            @click="sub()"
            >{{ num }}</span
          >
          <span
            class="iconfont icon-arrow_right"
            style="font-size:50px;"
            @click="add()"
          ></span>
        </div>
        <el-button>确定捐赠</el-button>
      </el-tab-pane>
    </el-tabs>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
export default {
  name: "StoreView",
  components: { BottomPanel },
  data() {
    return {
      num: 0,
      isShow: -1
    };
  },
  methods: {
    add() {
      this.num++;
    },
    sub() {
      if (this.num > 0) this.num--;
    }
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
