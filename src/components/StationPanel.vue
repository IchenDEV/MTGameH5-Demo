<template>
  <el-card :body-style="{ padding: '0px' }">
    <div style="padding: 14px;width:200px;">
      <span>下一站</span>
      <div class="bottom clearfix">
        <el-button type="text" class="button">龙翔桥</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "StationPanel",
  props: {
    label: String,
    icon: String,
    color: String
  },
  methods: {
    action() {
      this.$emit("action", this.label);
    }
  }
};
</script>
<style>
.label {
  margin-left: auto;
  margin-right: auto;
  font-weight: bolder;
}
.flex-itemX {
  flex: auto;
  width: auto;
  margin: 1rem;
}
</style>
