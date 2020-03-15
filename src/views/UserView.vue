<template>
  <bottom-panel>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
export default {
  name: "UserView",
  components: { BottomPanel }
};
</script>
<style lang="less" scoped>
.tabs {
  border-radius: 2rem;
  overflow: hidden;
}
</style>
