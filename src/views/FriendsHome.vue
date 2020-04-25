<template>
  <div class="home">
    <div class="background"></div>
    <div class="top">
      <StationPanel></StationPanel>
    </div>

    <vue-star class="buttom" animate="animated bounceIn">
      <game-button
        slot="icon"
        label="点赞"
        size="small"
        icon="icon-dianzan"
      ></game-button>
    </vue-star>

    <vue-star class="buttom" style="right:0.5rem;" animate="animated bounceIn">
      <game-button
        slot="icon"
        label="投食"
        size="small"
        icon="icon-yu"
      ></game-button>
    </vue-star>

    <div class="buttom">
      <user-avatar style="top:1.4rem;" :Lv="level"></user-avatar>
    </div>

    <div class="right">
      <game-button
        label="返回"
        size="small"
        icon="icon-fanhui"
        @click="backClicked"
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
import StationPanel from "../components/StationPanel";
import VueStar from "vue-star";
export default {
  name: "Home",
  components: {
    GameButton,
    UserAvatar,
    StationPanel,
    VueStar
  },
  computed: {
    level: function() {
      return this.$store.getters.friendInfo(this.$route.params.id).level;
    }
  },
  mounted() {
    this.$store.state.currentOrder = this.$store.getters.friendInfo(
      this.$route.params.id
    ).modelOrder;
  },
  methods: {
    settingClicked() {
      this.$router.push("/about");
    },
    backClicked() {
      this.$router.push("/");
    },
    foodClicked() {
      this.$router.push("/friend");
    },
    likeClicked() {
      this.$router.push("/friend");
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
.amap-geolocation-con .amap-logo .amap-copyright {
  z-index: auto !important;
}
</style>
