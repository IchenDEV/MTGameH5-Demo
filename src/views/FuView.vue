<template>
  <div class="about">
    <h1>
      我的福卡
      <game-button
        label="返回"
        size="small"
        icon="icon-fanhui"
        @click="backClicked"
      >
      </game-button>
    </h1>
    <div
      style="display: flex;width:100%;height:100%;overflow:auto"
    >
      <fucard :show-button="false" style="transform: scale(6) translate(30px, 50px);max-width:300px;"></fucard
      ><fucard :show-button="false" style="transform: scale(6) translate(60px, 50px);max-width:300px;"></fucard>
    </div>
  </div>
</template>
<script>
import fucard from "../components/FuCard";
import GameButton from "../components/GameButton";
export default {
  name: "FuView",
  components: {
    fucard,
    GameButton
  },
  data: function() {
    return {
      sound: true,
      notify: true
    };
  },
  mounted() {
    this.$store.state.showLive2D = false;
  },
  methods: {
    backClicked() {
      this.$router.push("/");
    }
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
<style lang="less"></style>
