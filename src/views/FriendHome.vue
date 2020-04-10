<template>
  <div class="home">
    <x-d-map-panel v-if="$store.state.XDMap"></x-d-map-panel>
    <div v-else class="background"></div>
    <div class="top">
      <user-avatar :Lv="$store.state.level"></user-avatar>
    </div>
    <vue-live2d class="center" :modelPath="$store.state.modelPath"></vue-live2d>
    <div class="buttom">
      <game-button
        label="点赞"
        size="small"
        icon="icon-chengjiu"
        @click="achClicked()"
      ></game-button>
      <game-button
        label="投食"
        size="small"
        icon="icon-tubiaozhizuomoban-"
        @click="bagClicked"
      ></game-button>
    </div>
    <div class="right">
      <game-button
        label="好友"
        size="small"
        icon="icon-haoyou"
        @click="friendClicked()"
      ></game-button>
      <game-button
        label="设置"
        size="small"
        icon="icon-shezhi"
        @click="settingClicked"
      ></game-button>
    </div>
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
// @ is an alias to /src
import GameButton from "../components/GameButton";
import UserAvatar from "../components/UserAvatar";
import XDMapPanel from "../components/XDMapPanel";
export default {
  name: "Home",
  components: {
    GameButton,
    UserAvatar,
    XDMapPanel
  },
  methods: {
    settingClicked() {
      this.$router.push("/about");
    },
    eventClicked() {
      this.$router.push("/event");
    },
    arClicked() {
      this.$router.push("/ar");
    },
    bagClicked() {
      this.$router.push("/bag");
    },
    storeClicked() {
      this.$router.push("/store");
    },
    achClicked() {
      this.$router.push("/achievement");
    },
    friendClicked() {
      this.$router.push("/friend");
    },
    notifyClick() {
      this.$router.push("/notify");
    },
    gameClick() {
      this.$router.push("/game");
    },
    userClicked() {
      this.$router.push("/user");
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
  z-index: 0;
  opacity: 0.4;
}
.buttom {
  bottom: 0.5rem;
  margin: 0.5rem;
  position: fixed;
}
.top {
  top: 0.5rem;
  margin: 0.5rem;
  position: fixed;
}
.right {
  right: 0;
  display: grid;
  margin: 0.5rem;
  position: fixed;
}
.live2d-wrap {
  z-index: unset;
}
.center {
  width: 100%;
}
</style>
