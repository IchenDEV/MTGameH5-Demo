<template>
  <div class="fucard">
    <iframe class="frm" :src="src" frameborder="0"></iframe>
    <div class="tpc" v-if="showButton">
      <div class="label">{{ label }}</div>
      <el-button type="primary" round icon="el-icon-goods" @click="action"
        >收下福卡</el-button
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "FuCard",
  props: {
    showButton: Boolean,
    type: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["ditan", "pingan", "123"].indexOf(value) !== -1;
      },
      default: "ditan"
    }
  },
  computed: {
    label: function() {
      switch (this.type) {
        case "ditan":
          return "低碳福";
        default:
          return "";
      }
    },
    src: function() {
      switch (this.type) {
        case "ditan":
          return "./card/bike/index.html";
        default:
          return "";
      }
    }
  },
  methods: {
    action() {
      this.$router.push("/fu");
    }
  }
};
</script>
<style lang="css" scoped>
.fucard {
  margin-top: -50px;
  transform: translateX(-25px);
  height: 100px;
  width: 50px;
  text-align: center;
}
.label {
  color: white;
  font-weight: bolder;
  margin: 1rem;
}
.frm {
  border-radius: 2rem;
  height: 500px;
  width: 250px;
  transform: scale(0.2) translate(-500px, -1000px);
}
.tpc {
  display: inline;
  transform: scale(0.8) translate(-75px, -560px);
  position: absolute;
}
</style>
