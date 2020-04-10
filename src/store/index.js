import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playBackmusic: true,
    XDMap: true,
    level: 10,
    modelPath: [
      {
        order: 1,
        path: "/live2d/hijiki/hijiki.model.json"
      }
    ],
    isReload: true
  },
  mutations: {},
  actions: {},
  modules: {}
});
