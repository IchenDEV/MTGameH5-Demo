<template>
  <bottom-panel>
    <h2>背包</h2>
    <el-tabs class="tabs" tab-position="left">
      <el-tab-pane
        v-for="(ix, ind) in bag"
        :key="ind"
        :label="ix.label"
        class="stab flex-containerX"
      >
        <bag-item
          :key="index + 'S'"
          mode="use"
          v-for="(item, index) in ix.items"
          :label="item.name"
          :url="item.icon"
          @action="useSomething"
        ></bag-item>
      </el-tab-pane>
    </el-tabs>
  </bottom-panel>
</template>

<script>
import BottomPanel from "../components/BottomPanel";
import BagItem from "../components/BagItem";
export default {
  name: "BagView",
  components: { BottomPanel, BagItem },
  computed: {
    bag: function() {
      return this.$store.getters.userInfo.bag;
    }
  },
  methods: {
    useSomething() {
      this.$store.state.user.LvUp = true;
    },
    useSkin(name) {
      let path = { path: "/live2d/" + name + "/" + name + ".model.json" };
      let pet = this.$store.state.pet;
      pet.model.path = path;
      this.$store.dispatch("updatePetInfo", pet);
      this.$router.push("/");
    }
  }
};
</script>
