<template>
  <div class="top" @click="showLv = !showLv">
    <el-avatar
      :size="64"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    ></el-avatar>
    <transition name="fade">
      <div v-if="showLv" class="semi-circle">{{ Lv }}</div>
    </transition>
    <el-progress
      class="progress"
      :width="64"
      type="circle"
      :percentage="88"
      :show-text="false"
    ></el-progress>
  </div>
</template>
<script>
export default {
  name: "UserAvatar",
  props: {
    Lv: Number
  },
  data() {
    return {
      showLv: false
    };
  }
};
</script>
<style scoped>
.avatar {
  position: fixed;
}
.progress {
  position: absolute;
  left: 0;
}
.semi-circle {
  border-radius: 500%;
  height: 64px;
  width: 64px;
  left: 0;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  position: absolute;
  text-align: center;
  line-height: 64px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-weight: bolder;
  font-size: 1.5rem;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s ease;
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: opacity;
  opacity: 0;
}
</style>
