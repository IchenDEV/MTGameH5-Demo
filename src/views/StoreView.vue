<template>
  <bottom-panel>
    <h2>商城</h2>
    <link
      rel="stylesheet"
      href="https://at.alicdn.com/t/font_1734945_hjbc2vctox.css"
    />
    <el-tabs class="tabs" tab-position="left">
      <el-tab-pane
        v-for="(ix, ind) in store"
        :key="ind"
        :label="ix.label"
        class="stab flex-containerX"
      >
        <bag-item
          :key="index + 'S'"
          mode="buy"
          v-for="(item, index) in ix.items"
          :label="item.name"
          :url="item.icon"
          :number="item.pri"
          @action="pushSuccess"
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
    <el-dialog
      center
      class="dialog"
      title="购买成功"
      :visible.sync="dialogVisible"
      :show-close="false"
    >
      <span slot="footer" class="dialog-footer">
        <div>恭喜获得</div>
        <div>购买成功🎉</div>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
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
      num: 0,
      isShow: -1,
      dialogVisible: false
    };
  },
  computed: {
    store: function() {
      return this.$store.getters.storeInfo;
    }
  },
  methods: {
    pushSuccess() {
      this.$notify({
        title: "成功",
        message: "购买成功",
        type: "success",
        duration: 0
      });
    },
    add() {
      this.num++;
    },
    sub() {
      if (this.num > 0) this.num--;
    }
  }
};
</script>
