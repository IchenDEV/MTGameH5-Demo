<template>
  <bottom-panel>
    <h2>背包</h2>
    <el-tabs class="tabs" tab-position="left">
      <el-tab-pane label="食物" class="stab flex-containerX">
        <bag-item
          :key="index"
          v-for="(item, index) in foods"
          :label="item.name"
          :icon="item.icon"
        ></bag-item>
      </el-tab-pane>
      <el-tab-pane label="皮肤" class="stab flex-containerX">
        <bag-item
          :key="index"
          v-for="(item, index) in skins"
          :label="item.name"
          :icon="item.icon"
          @action="useSkin"
        ></bag-item>
      </el-tab-pane>
      <el-tab-pane label="优惠券" class="stab flex-containerX">
        <bag-item
          :key="index"
          v-for="(item, index) in coupons"
          :label="item.name"
          :icon="item.icon"
        ></bag-item>
      </el-tab-pane>
      <el-tab-pane label="福卡" class="stab flex-containerX">
        <bag-item
          :key="index"
          v-for="(item, index) in fucards"
          :label="item.name"
          :icon="item.icon"
        ></bag-item>
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
  data() {
    return {
      foods: [
        { name: "小鱼干", icon: "" },
        { name: "冻干", icon: "" },
        { name: "罐头", icon: "" },
        { name: "帝王蟹", icon: "" },
        { name: "白开水", icon: "" },
        { name: "卡布奇诺", icon: "" },
        { name: "猫屎咖啡", icon: "" }
      ],
      skins: [
        { name: "hijiki", icon: "" },
        { name: "tororo", icon: "" },
        { name: "美短", icon: "" },
        { name: "折耳", icon: "" }
      ],
      fucards: [{ name: "西湖福", icon: "" }],
      coupons: [
        { name: "9.8折", icon: "" },
        { name: "8.8折", icon: "" },
        { name: "6.8折", icon: "" },
        { name: "5.8折", icon: "" }
      ]
    };
  },
  methods: {
    useSkin(name) {
      let path = { path: "/live2d/" + name + "/" + name + ".model.json" };
      this.$store.state.modelPath.path = path;
      this.$router.push("/");
    }
  }
};
</script>
