<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="panel2">
      <span>下一站</span>
      <div class="bottom clearfix">
        <el-button type="text" class="button">{{ station.next }}</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "StationPanel",
  props: {
    label: String,
    icon: String,
    color: String
  },
  computed: {
    station: function() {
      return this.$store.getters.stationInfo;
    }
  },
  methods: {
    action() {
      this.$emit("action", this.label);
    }
  }
};
</script>
<style>
.panel2 {
  padding: 14px;
  width: 180px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.6);
}
.label {
  margin-left: auto;
  margin-right: auto;
  font-weight: bolder;
}
.flex-itemX {
  flex: auto;
  width: auto;
  margin: 1rem;
}
</style>
