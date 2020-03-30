<template>
  <div class="home">
    <div class="top">
      <user-avatar :Lv="10"></user-avatar>
    </div>
    <div class="background"></div>
    <vue-live2d class="center" :modelPath="modelPath"></vue-live2d>
    <div class="buttom">
      <game-button
        label="成就"
        size="small"
        icon="icon-chengjiu"
        @click="achClicked()"
      ></game-button>
      <game-button
        label="背包"
        size="small"
        icon="icon-tubiaozhizuomoban-"
        @click="bagClicked"
      ></game-button>
      <game-button
        label="游戏"
        size="small"
        icon="icon-gameboy"
        @click="gameClick()"
      ></game-button>
    </div>
    <div class="right">
      <game-button
        label="任务"
        size="small"
        icon="icon-renwu1"
        @click="eventClicked"
      ></game-button>
      <game-button
        label="通知"
        size="small"
        icon="icon-tongzhi"
        @click="notifyClick()"
      ></game-button>
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
export default {
  name: "Home",
  components: {
    GameButton,
    UserAvatar
  },
  data() {
    return {
      modelPath: [
        {
          order: 1,
          path: "/live2d/cat/tororo.model.json"
        }
      ]
    };
  },
  methods: {
    settingClicked() {
      this.$router.push("/about");
    },
    eventClicked() {
      this.$router.push("/event");
    },
    bagClicked() {
      this.$router.push("/bag");
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
  z-index: -1;
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
