<template>
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
      <el-button type="primary" @click="$store.state.user.LvUp = false"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
// @ is an alias to /src
export default {
  name: "LvUp",
  props: {
    dialogVisible: Boolean,
    type: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["ditan", "pingan", "123"].indexOf(value) !== -1;
      },
      default: "ditan"
    }
  },
  methods: {
    action() {
      this.$router.push("/fu");
    }
  }
};
</script>

