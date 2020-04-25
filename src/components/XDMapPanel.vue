<template>
  <div id="containerX" class="container"></div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// @ is an alias to /src
let geolocation = new qq.maps.Geolocation();
export default {
  name: "XDMapPanel",
  data() {
    return {
      map: null,
      getlocation: null
    };
  },
  methods: {
    InitMap() {
      //定义地图中心点坐标
      var center = new TMap.LatLng(39.98412, 116.307484);
      //定义map变量，调用 TMap.Map() 构造函数创建地图
      this.map = new TMap.Map(document.getElementById("containerX"), {
        center: center, //设置地图中心点坐标
        zoom: 18, //设置地图缩放级别
        pitch: 85 //设置俯仰角
      });

      geolocation.getLocation(
        position => {
          console.log(position);
          this.map.setCenter(new TMap.LatLng(position.lat, position.lng));
        },
        () => {},
        { timeout: 9000 }
      );
      geolocation.watchPosition(position => {
        console.log(position);
        this.map.setCenter(new TMap.LatLng(position.lat, position.lng));
      });
    }
  },
  mounted() {
    this.InitMap();
  },
  beforeDestroy() {
    this.map.destroy();
    geolocation.clearWatch();
  }
};
</script>
<style lang="css" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  resize: both;
}
</style>
<style>
.zoom-control {
  display: none;
}
</style>
