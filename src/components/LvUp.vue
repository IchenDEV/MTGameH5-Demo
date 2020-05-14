<template>
  <div>
    <el-dialog
      center
      class="dialog"
      title="Lv Up"
      :visible.sync="dialogVisible"
      :show-close="false"
    >
      <img src="/img/level_up.gif" width="100%" />
      <span slot="footer" class="dialog-footer">
        <div>Lv 9 ->Lv 10</div>
        <div>恭喜升级🎉</div>
        <el-button type="primary" @click="c1">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      center
      class="dialog"
      title="恭喜获得抽奖机会"
      :visible.sync="dialogVisible2"
      :show-close="false"
    >
      <vue-scratch-card element-id="scratchWrap" :ratio="0.5" :move-radius="50">
        <div slot="result" style="text-align: center;">
          <img src="/img/coffee.png" width="50%" style="margin-top:-1rem" />
          <div>
            恭喜您中大奖啦～
          </div>
        </div></vue-scratch-card
      >
      <el-button type="primary" @click="c2">确 定</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "LvUp",
  props: {
    type: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["ditan", "pingan", "123"].indexOf(value) !== -1;
      },
      default: "ditan"
    }
  },
  data() {
    return {
      dialogVisible: true,
      dialogVisible2: false
    };
  },
  methods: {
    action() {
      this.$router.push("/fu");
    },
    c1() {
      this.dialogVisible = false;
      this.dialogVisible2 = true;
    },
    c2() {
      this.$store.state.user.LvUp = false;
      this.dialogVisible2 = false;
      this.dialogVisible = true;
    }
  }
};
</script>
