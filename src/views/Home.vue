<template>
  <div class="home">
    <div v-if="!XDMap" class="background"></div>
    <div class="top">
      <StationPanel></StationPanel>
    </div>
    <div class="buttom">
      <user-avatar style="top:1.4rem;" :Lv="level"></user-avatar>
      <game-button
        label="成就"
        size="small"
        icon="icon-chengjiu"
        @click="achClicked"
      ></game-button>
      <game-button
        label="背包"
        size="small"
        icon="icon-tubiaozhizuomoban-"
        @click="bagClicked"
      ></game-button>
      <game-button
        label="商城"
        size="small"
        icon="icon-gameboy"
        @click="storeClicked"
      ></game-button>
      <game-button
        label="游戏"
        size="small"
        icon="icon-gamepadxbox"
        @click="gameClick"
      ></game-button>
    </div>
    <div class="right">
      <el-badge value="new" class="item">
        <game-button
          label="通知"
          size="small"
          icon="icon-tongzhi"
          @click="notifyClick"
        ></game-button>
      </el-badge>
      <game-button
        label="好友"
        size="small"
        icon="icon-haoyou"
        @click="friendClicked"
      ></game-button>
      <game-button
        label="设置"
        size="small"
        icon="icon-shezhi"
        @click="settingClicked"
      ></game-button>
      <game-button
        label="AR"
        size="small"
        icon="icon-ar"
        @click="arClicked"
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
import StationPanel from "../components/StationPanel";
export default {
  name: "Home",
  components: {
    GameButton,
    UserAvatar,
    StationPanel
  },
  computed: {
    XDMap: function() {
      return this.$store.getters.use3DMap;
    },
    level: function() {
      return this.$store.getters.userInfo.level;
    }
  },
  mounted() {
    this.$store.state.currentOrder = this.$store.getters.userInfo.modelOrder;
    this.$store.state.showLive2D = true;
  },
  methods: {
    settingClicked() {
      this.$router.push("/about");
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
<style>
.el-badge__content.is-fixed {
  top: 10px !important;
  right: 30px !important;
}
</style>
