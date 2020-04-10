<template>
  <div class="about">
    <h1>设置</h1>
    <div class="flex-container">
      <h4 class="header">背景音乐</h4>
      <el-switch v-model="$store.state.playBackmusic"></el-switch>
    </div>
    <div class="flex-container">
      <h4 class="header">3D 地图</h4>
      <el-switch v-model="$store.state.XDMap"></el-switch>
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
// @ is an alias to /src
export default {
  name: "About",
  data: () => {
    return {
      music: false,
      sound: true,
      notify: true,
      nickName: "宠物大师"
    };
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
