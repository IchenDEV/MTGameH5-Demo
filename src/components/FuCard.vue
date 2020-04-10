<template>
  <div class="fucard">
    <iframe class="frm" src="./card/bike/index.html" frameborder="0"></iframe>
    <div>{{ label }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "FuCard",
  props: {
    label: String,
    icon: String
  }
};
</script>
<style lang="css" scoped>
.fucard {
  margin-top: -50px;
  transform: translateX(-25px);
  height: 100px;
  width: 50px;
}
.frm {
  border-radius: 2rem;
  height: 500px;
  width: 250px;
  transform: scale(0.2) translate(-500px, -1000px);
}
</style>
