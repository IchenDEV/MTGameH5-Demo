<template>
  <div id="containerX" class="container"></div>
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: "XDMapPanel",
  data() {
    return {
      map: null,
      getlocation: null
    };
  },
  mounted() {
    this.InitMap();
  },
  methods: {
    InitMap() {
      document.getElementById("containerX").children.forEach(element => {
        document.getElementById("containerX").removeChild(element);
      });
      //定义map变量，调用 TMap.Map() 构造函数创建地图
      this.map = new TMap.Map(document.getElementById("containerX"), {
        zoom: 18, //设置地图缩放级别
        pitch: 85 //设置俯仰角
      });
      this.geolocation = new qq.maps.Geolocation();
      this.geolocation.getLocation(
        position => {
          this.map.setCenter(new TMap.LatLng(position.lat, position.lng));
        },
        () => {},
        { timeout: 9000 }
      );
      this.geolocation.watchPosition(position => {
        this.map.setCenter(new TMap.LatLng(position.lat, position.lng));
      });
    }
  },

  beforeDestroy() {
    if (this.getlocation) this.geolocation.clearWatch();
    if (this.map) this.map.destroy();
  }
};
</script>
<style lang="css" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  resize: both;
  overflow: -webkit-paged-y;
}
</style>
<style>
.zoom-control {
  display: none;
}
</style>
