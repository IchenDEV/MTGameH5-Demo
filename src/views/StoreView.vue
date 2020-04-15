<template>
  <bottom-panel>
    <h2>商城</h2>
    <link
      rel="stylesheet"
      href="https://at.alicdn.com/t/font_1734945_hjbc2vctox.css"
    />
    <el-tabs class="tabs" tab-position="left">
      <el-tab-pane label="食物" class="stab flex-containerX">
        <bag-item
          :key="index + 'S'"
          mode="buy"
          v-for="(item, index) in foods"
          :label="item.name"
          :icon="item.icon"
        ></bag-item>
      </el-tab-pane>
      <el-tab-pane label="饮料" class="stab flex-containerX">
        <bag-item
          :key="index + 'S'"
          mode="buy"
          v-for="(item, index) in drinks"
          :label="item.name"
          :icon="item.icon"
        ></bag-item>
      </el-tab-pane>
      <el-tab-pane label="皮肤" class="stab flex-containerX">
        <bag-item
          :key="index + 'S'"
          mode="buy"
          v-for="(item, index) in skins"
          :label="item.name"
          :icon="item.icon"
        ></bag-item>
      </el-tab-pane>
      <el-tab-pane label="优惠券" class="stab flex-containerX">
        <bag-item
          :key="index + 'S'"
          v-for="(item, index) in coupons"
          :label="item.name"
          :icon="item.icon"
        ></bag-item>
      </el-tab-pane>
      <el-tab-pane label="积分捐赠" class="stab">
        <div class="+-" style="text-align:center;line-height:120px;">
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
import BagItem from "../components/BagItem";
export default {
  name: "StoreView",
  components: { BottomPanel, BagItem },
  data() {
    return {
      foods: [
        { name: "小鱼干", icon: "" },
        { name: "冻干", icon: "" },
        { name: "罐头", icon: "" },
        { name: "帝王蟹", icon: "" }
      ],
      drinks: [
        { name: "白开水", icon: "" },
        { name: "卡布奇诺", icon: "" },
        { name: "猫屎咖啡", icon: "" }
      ],
      skins: [
        { name: "折耳", icon: "" },
        { name: "布偶", icon: "" },
        { name: "美短", icon: "" },
        { name: "折耳", icon: "" }
      ],
      coupons: [
        { name: "9.8折", icon: "" },
        { name: "8.8折", icon: "" },
        { name: "6.8折", icon: "" },
        { name: "5.8折", icon: "" }
      ],
      fucards: [{ name: "西湖福", icon: "" }],
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
