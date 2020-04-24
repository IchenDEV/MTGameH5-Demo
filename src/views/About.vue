<template>
  <div class="about">
    <h1>设置</h1>
    <div class="flex-container">
      <h4 class="header">背景音乐</h4>
      <el-switch v-model="music"></el-switch>
    </div>
    <div class="flex-container">
      <h4 class="header">3D 地图</h4>
      <el-switch v-model="XDMap"></el-switch>
    </div>
    <div class="flex-container">
      <h4 class="header">音效</h4>
      <el-switch v-model="sound"></el-switch>
    </div>
    <div class="flex-container">
      <h4 class="header">消息通知</h4>
      <el-switch v-model="notify"></el-switch>
    </div>
    <div class="flex-container">
      <h4 class="header">昵称</h4>
      <el-input v-model="nickName" placeholder="请输入昵称"></el-input>
    </div>

    <div class="back">
      <h4 class="header red">删除</h4>
    </div>
    <div class="back" @click="$router.push('/')">
      <h4 class="header">返回</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data: function() {
    return {
      sound: true,
      notify: true
    };
  },
  mounted() {
    this.$store.state.showLive2D = false;
  },
  computed: {
    music: {
      get: function() {
        return this.$store.getters.playBackgroundMusic;
      },
      set: function(newOne) {
        this.$store.commit("setIsPlayBackgroundMusic", newOne);
      }
    },
    XDMap: {
      get: function() {
        return this.$store.getters.use3DMap;
      },
      set: function(newOne) {
        this.$store.commit("set3DMap", newOne);
      }
    },
    nickName: {
      get: function() {
        return this.$store.getters.petInfo.name;
      },
      set: function(newOne) {
        this.$store.commit("set3DMap", newOne);
      }
    }
  }
};
</script>
<style lang="less">
.header {
  display: inline;
  left: 0;
  padding: 0;
  margin: 0;
  margin-right: 0.5rem;
  min-width: 3rem;
  align-self: center;
}
.back {
  background-color: white;
  padding: 0.6rem;
  margin-top: 2rem;
}
.flex-container {
  display: flex;
  background-color: white;
  justify-content: space-between;
  padding: 0.6rem;
  border: 0.5px solid lightgray;
  border-radius: 2px;
}
.about {
  background: #efeff4;
  height: 100%;
  width: 100%;
  position: absolute;
}
.red {
  color: red;
  font-weight: bolder;
  text-align: center;
}
</style>
