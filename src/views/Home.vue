<template>
  <div class="home">
    <div class="background"></div>
    <div class="buttom">
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button
        type="primary"
        icon="el-icon-setting"
        @click="settingClicked"
      ></el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    settingClicked() {
      this.$router.push("/about");
    }
  }
};
</script>
<style scoped>
.background {
  background-image: url(/img/city1.jpg);
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  z-index: -1;
}
.buttom {
  bottom: 0.5rem;
  margin: 0.5rem;
  position: fixed;
}
</style>
