<template>
  <bottom-panel>
    <h2>小游戏</h2>
    <div class="stab flex-containerX">
      <bag-item
        mode="play"
        :key="ix"
        v-for="(item, ix) in games"
        @action="playGame(item)"
        :label="item.name"
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
      games: [
        {
          id: 0,
          name: "Swing",
          icon: "",
          link: "../../pigCatchBubble/pig.html"
        },
        {
          id: 1,
          name: "Swing",
          icon: "",
          link: "../../pigCatchBubble/bubble.html"
        }
      ]
    };
  },
  methods: {
    playGame(item) {
      console.log(1312);
      window.location = item.link;
    }
  }
};
</script>
