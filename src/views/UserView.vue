<template>
  <bottom-panel>
    <user-avatar></user-avatar>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import UserAvatar from "../components/UserAvatar";
import BottomPanel from "../components/BottomPanel";
export default {
  name: "UserView",
  components: { BottomPanel, UserAvatar }
};
</script>
<style lang="less" scoped>
.tabs {
  border-radius: 2rem;
  overflow: hidden;
}
</style>
