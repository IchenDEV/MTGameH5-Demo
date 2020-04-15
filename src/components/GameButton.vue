<template>
  <button
    class="button ms-depth-16"
    :class="buttonSize"
    @click="$emit('click')"
  >
    <div style="padding-top:0.5rem;">
      <i class="icon iconfont" :class="icon" aria-hidden="true"></i>
      <div class="label">{{ label }}</div>
    </div>
  </button>
</template>

<script>
export default {
  name: "GameButton",
  props: {
    label: String,
    size: String,
    icon: String,
    color: String
  },
  computed: {
    buttonSize() {
      switch (this.size) {
        case "large":
          return "large";
        case "small":
          return "small";
        default:
          return "large";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@font-face {
  font-family: "bwrite";
  src: url("/font/OPPOSans-B.ttf");
}
.button {
  margin: 0.5rem;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 0;
  font-size: 1.2rem;
  border-radius: 50%;
  color: #fff;
  background-color: #409eff;
  border-color: transparent;
}
.large {
  width: 5rem;
  height: 5rem;
  .label {
    font-size: 2rem;
    font-family: "bwrite";
    white-space: nowrap;
    -webkit-text-stroke: 1.2px #409eff;
    overflow-x: visible;
    overflow-y: visible;
    overflow: auto;
  }
  .icon {
    font-size: 1.5rem;
    padding-top: 0.5rem;
  }
}
.small {
  width: 3rem;
  height: 3rem;
  .label {
    margin-top: 0.2rem;
    font-size: 1.1rem;
    white-space: nowrap;
    font-family: "bwrite";
  }
  .icon {
    font-size: 1.5rem;
    padding-top: 0.5rem;
  }
  text-shadow: 0px 0px 4px #000000;
}
</style>
