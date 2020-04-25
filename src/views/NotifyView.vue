<template>
  <bottom-panel>
    <h2>通知</h2>
    <div
      v-for="(item, index) in notifications"
      :key="index"
      style="margin:0.5rem;"
      @click="read(item)"
    >
      <el-badge value="new" v-if="!item.isRead"> </el-badge>
      <h4 style="display:inline;padding:0.5rem;">{{ item.title }}</h4>
      <span style="display:inline;padding:0.5rem;">{{ item.sender }}</span>
    </div>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
export default {
  name: "NotifyView",
  components: { BottomPanel },
  computed: {
    notifications: function() {
      console.log(this.$store.getters.userInfo.notification);
      return this.$store.getters.userInfo.notification;
    }
  },
  methods: {
    read(msg) {
      this.$alert(msg.msg, msg.title, {
        confirmButtonText: "确定",
        callback: () => {}
      });
    }
  }
};
</script>
