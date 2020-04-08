import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "office-ui-fabric-core/dist/css/fabric.css";
import "./assets/font/iconfont.css";
import "./assets/font/iconfont.js";
import { VueXR } from "vuexr";
import VueLive2d from "vue-live2d-model";
Vue.use(VueLive2d);
Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.use(VueXR);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
