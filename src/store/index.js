import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentOrder: 1,
    showLive2D: true,
    models: [
      {
        order: 1,
        path: "/live2d/hijiki/hijiki.model.json"
      },
      {
        order: 2,
        path: "/live2d/tororo/tororo.model.json"
      }
    ],
    pet: {
      name: "次郎",
      level: 10,
      exp: 2000,
      modelOrder: 1
    },
    user: {
      id: 0,
      basicInfo: {},
      level: 10,
      friends: [
        {
          id: 1,
          name: "法外狂徒张三",
          level: 11,
          modelOrder: 2
        },
        {
          id: 2,
          name: "几何大师欧几里得",
          level: 11,
          modelOrder: 1
        }
      ],
      notification: [
        {
          title: "标题",
          msg: "Test",
          sender: "fucker"
        }
      ]
    },
    achievents: [
      {
        name: "星星之火",
        description: "FFFFFFF",
        isGet: false
      }
    ],

    system: {
      playBackmusic: true,
      XDMap: true
    },
    isReload: true
  },
  getters: {
    playBackgroundMusic: state => {
      state.system.playBackmusic = localStorage.getItem("playBackmusic");
      return state.system.playBackmusic === "false" ? false : true;
    },
    use3DMap: state => {
      state.system.XDMap = localStorage.getItem("XDMap");
      return state.system.XDMap === "false" ? false : true;
    },
    petInfo: state => {
      return state.pet;
    },
    userInfo: state => {
      return state.user;
    },
    friendInfo: state => id => {
      let asx;
      state.user.friends.forEach(element => {
        if (element.id == id) {
          asx = element;
          return;
        }
      });
      return asx;
    }
  },
  mutations: {
    setIsPlayBackgroundMusic(state, canPlay) {
      localStorage.setItem("playBackmusic", canPlay);
      state.system.playBackmusic = canPlay;
    },
    set3DMap(state, canUse) {
      localStorage.setItem("XDMap", canUse);
      state.system.XDMap = canUse;
    },
    setPetInfo(state, Info) {
      state.pet = Info;
    }
  },
  actions: {
    updatePetInfo(context, payload) {
      if (payload !== null) context.commit("setPetInfo", payload);
      else context.commit("setPetInfo", payload); // TO-DO
    }
  },
  modules: {}
});
