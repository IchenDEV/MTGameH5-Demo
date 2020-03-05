<template>
  <div class="home">
    <div class="background"></div>
    <div class="buttom">
      <game-button label="成就" size="small" icon="icon-chengjiu"></game-button>
      <game-button
        label="背包"
        size="small"
        icon="icon-tubiaozhizuomoban-"
      ></game-button>
    </div>
    <div class="right">
      <game-button label="任务" size="small" icon="icon-renwu1"></game-button>
      <game-button label="通知" size="small" icon="icon-tongzhi"></game-button>
      <game-button label="好友" size="small" icon="icon-haoyou"></game-button>
      <game-button
        label="设置"
        size="small"
        icon="icon-shezhi"
        @click="settingClicked"
      ></game-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GameButton from "../components/GameButton";
export default {
  name: "Home",
  components: {
    GameButton
  },
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
.right {
  right: 0;
  display: grid;
  margin: 0.5rem;
  position: fixed;
}
</style>
