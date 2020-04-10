<template>
  <div class="flex-itemX">
    <div class="label">{{ label }}</div>
    <el-button
      v-if="mode === 'use'"
      type="primary"
      round
      icon="el-icon-goods"
      @click="action"
      >使用</el-button
    >
    <el-button
      v-if="mode === 'play'"
      type="primary"
      round
      icon="el-icon-play"
      @click="action"
      >Play</el-button
    >
    <el-button
      v-if="mode === 'buy'"
      type="primary"
      round
      icon="el-icon-goods"
      @click="action"
      >购买</el-button
    >
  </div>
</template>

<script>
export default {
  name: "BagItem",
  props: {
    label: String,
    icon: String,
    color: String,
    mode: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["play", "use", "buy"].indexOf(value) !== -1;
      },
      default: "use"
    }
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
