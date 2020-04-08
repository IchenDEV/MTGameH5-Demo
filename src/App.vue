<template>
  <div id="app">
    <transition name="el-zoom-in-top">
      <router-view />
    </transition>
    <audio autoplay="autoplay" id="music1">
      <source src="./assets/music/backmusic.mp3" />
    </audio>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "App",
  computed: {
    // 计算属性的 getter
    playBackmusic: function() {
      // `this` 指向 vm 实例
      return this.$store.state.playBackmusic;
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    // eslint-disable-next-line no-unused-vars
    playBackmusic: function(newOne, oldOne) {
      var audio = document.getElementById("music1");
      if (newOne) {
        audio.play(); // 播放
      } else {
        audio.pause(); // 暂停
      }
    }
  }
};
</script>
<style lang="less" scoped>
F .tabs {
  border-radius: 2rem;
  overflow: hidden;
}
</style>
<style lang="less">
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
</style>
