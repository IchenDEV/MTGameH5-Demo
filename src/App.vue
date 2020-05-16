<template>
  <div id="app">
    <transition name="el-zoom-in-top">
      <router-view />
    </transition>
    <x-d-map-panel
      v-if="XDMap"
      v-show="$store.state.showLive2D"
    ></x-d-map-panel>
    <vue-live2d
      slot="reference"
      class="center"
      v-show="$store.state.showLive2D"
      :order="order"
      :modelPath="$store.state.models"
    ></vue-live2d>
    <audio autoplay="autoplay" id="music1" v-if="musicBack">
      <source src="./assets/music/backmusic.mp3" />
    </audio>
    <img src="/img/bwt.png" height="30" class="logo" />
  </div>
</template>
<script>
// @ is an alias to /src
import XDMapPanel from "../src/components/XDMapPanel";
export default {
  name: "App",
  components: {
    XDMapPanel
  },
  computed: {
    musicBack: function() {
      return this.$store.getters.playBackgroundMusic;
    },
    order: function() {
      return this.$store.state.currentOrder;
    },
    XDMap: function() {
      return this.$store.getters.use3DMap;
    }
  }
};
</script>
<style>
.el-message-box {
  width: 300px !important;
}
.el-message-box__wrapper {
  z-index: 1000000 !important;
}
.background {
  background-image: url(/img/city1.jpg);
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  z-index: 0;
  opacity: 0.4;
}
.buttom {
  bottom: 0.5rem;
  margin: 0.5rem;
  position: fixed;
  z-index: 10000;
}
.top {
  top: 0.5rem;
  margin: 0.5rem;
  position: fixed;
  z-index: 10000;
}
.right {
  right: 0;
  display: grid;
  margin: 0.5rem;
  position: fixed;
  z-index: 10000;
}

.amap-geolocation-con .amap-logo .amap-copyright {
  z-index: auto !important;
}
</style>
<style lang="less">
.tabs {
  overflow: hidden;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.center {
  width: 100%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(10rem);
  opacity: 0;
}
.flex-containerX {
  display: flex;
  flex-direction: row;
  background: transparent;
  border: 0;
  flex-wrap: wrap;
}
.stab {
  max-height: 500px;
  padding-bottom: 10rem;
  overflow: scroll;
}
</style>
<style lang="css">
.dialog {
  z-index: 100002 !important;
}
.el-dialog,
.el-pager li {
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  width: 80%;
}
.el-dialog {
  z-index: 100028 !important;
}
.el-dialog__wrapper {
  z-index: 100028 !important;
}
.el-notification {
  z-index: 100010 !important;
}
.scale-control {
  display: none;
}
[target="_blank"] {
  display: none;
}
.logo-text {
  display: none;
}
.logo {
  position: absolute;
  bottom: 1.5rem;
  right: 0.5rem;
}
</style>
