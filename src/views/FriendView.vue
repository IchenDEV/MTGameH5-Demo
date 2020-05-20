<template>
  <bottom-panel>
    <h2>好友</h2>
    <table class="tabs" style="width:100%">
      <tr>
        <td style="width:80%">名称</td>
        <td style="width:20%">等级</td>
      </tr>
      <tr v-for="(i, index) in friends" :key="index">
        <a @click="friendClicked(i)" style="text-decoration:none;">
          <td style="color:#4D6AEB">
            {{ i.name }} <el-tag type="success">{{ i.state }}</el-tag>
          </td>
        </a>
        <td>{{ i.level }}</td>
      </tr>
    </table>
  </bottom-panel>
</template>

<script>
// @ is an alias to /src
import BottomPanel from "../components/BottomPanel";
export default {
  name: "FriendView",
  components: { BottomPanel },
  computed: {
    friends: function() {
      return this.$store.getters.userInfo.friends;
    }
  },
  methods: {
    friendClicked(i) {
      this.$router.push("/friendhome/" + i.id);
    }
  }
};
</script>
