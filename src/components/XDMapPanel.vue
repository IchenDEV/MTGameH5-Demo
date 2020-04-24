<template>
  <div id="containerX" class="container"></div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// @ is an alias to /src
export default {
  name: "XDMapPanel",
  data() {
    return {
      map: null,
      getlocation: null
    };
  },
  methods: {
    mapInit() {
      this.map = new AMap.Map("containerX", {
        resizeEnable: true,
        rotateEnable: true,
        pitchEnable: true,
        zoom: 17,
        pitch: 80,
        rotation: -15,
        viewMode: "3D", //开启3D视图,默认为关闭
        buildingAnimation: true, //楼块出现是否带动画
        expandZoomRange: true,
        zooms: [3, 20],
        center: [116.333926, 39.997245],
        showLabel: true,
        disableSocket: true,
        layers: [
          new AMap.TileLayer.RoadNet({
            //rejectMapMask:true
          }),
          new AMap.Buildings({
            zooms: [16, 18],
            zIndex: 10,
            heightFactor: 2 //2倍于默认高度，3D下有效
          })
        ]
      });
      AMap.plugin("AMap.Geolocation", () => {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：5s
          buttonPosition: "RB", //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: false //定位成功后是否自动调整地图视野到定位点
        });
        this.map.addControl(geolocation);
        this.getlocation = window.setInterval(() => {
          geolocation.getCurrentPosition((status, result) => {
            if (status == "complete") {
              onComplete(result);
            } else {
              onError(result);
            }
          });
        }, 5000);
      });
      //解析定位结果
      function onComplete(data) {
        var str = [];
        str.push("定位结果：" + data.position);
        str.push("定位类别：" + data.location_type);
        if (data.accuracy) {
          str.push("精度：" + data.accuracy + " 米");
        } //如为IP精确定位结果则没有精度信息
        str.push("是否经过偏移：" + (data.isConverted ? "是" : "否"));
        console.log(str);
      }
      //解析定位错误信息
      function onError(data) {}
    }
  },
  mounted() {
    this.mapInit();
  },
  beforeDestroy() {
    this.map.destroy();
    window.clearInterval(this.getlocation);
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
