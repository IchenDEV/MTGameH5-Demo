<template>
  <div class="flex-itemX">
    <div>{{ label }}</div>
    <el-button type="primary" round icon="el-icon-goods">使用</el-button>
  </div>
</template>

<script>
export default {
  name: "BagItem",
  props: {
    label: String,
    icon: String,
    color: String
  }
};
</script>
<style>
.flex-itemX {
  flex: auto;
  max-width: 5rem;
  width: auto;
  margin: 1rem;
}
</style>
