<template>
  <div class="top">
    <el-progress
      class="progress"
      :width="64"
      type="circle"
      :percentage="88"
      :show-text="false"
    ></el-progress>
    <el-avatar
      :size="64"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    ></el-avatar>
  </div>
</template>
<script>
export default {
  name: "UserAvatar"
};
</script>
<style scoped>
.avatar {
  position: fixed;
}
.progress {
  position: fixed;
}
</style>
