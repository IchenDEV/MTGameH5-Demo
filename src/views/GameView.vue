<template>
  <bottom-panel>
    <h2>小游戏</h2>
    <div class="stab flex-containerX">
      <bag-item
        mode="play"
        :key="item"
        v-for="item in games"
        :label="item"
      ></bag-item>
    </div>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
import BagItem from "../components/BagItem";
export default {
  name: "GameView",
  components: { BottomPanel, BagItem },
  data() {
    return {
      games: ["Swing"]
    };
  }
};
</script>
