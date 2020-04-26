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
    user: {
      id: 0,
      basicInfo: {},
      level: 10,
      pet: {
        name: "次郎",
        level: 10,
        exp: 2000,
        modelOrder: 1
      },
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
          id: 0,
          title: "标题",
          msg: "Test",
          sender: "fucker",
          isRead: false
        },
        {
          id: 1,
          title: "标题",
          msg: "Test",
          sender: "fucker",
          isRead: false
        },
        {
          id: 2,
          title: "标题",
          msg: "Test",
          sender: "fucker",
          isRead: true
        },
        {
          id: 3,
          title: "Hello",
          msg: "nihao",
          sender: "fucker",
          isRead: false
        }
      ],
      bag: [
        {
          label: "食物",
          items: [
            { id: 1, name: "小鱼干", icon: "./img/xiaoyugan.png", count: 1 },
            { id: 1, name: "牛肉", icon: "./img/beef.png", count: 1 },
            { id: 1, name: "罐头", icon: "./img/guantou.png", count: 1 },
            { id: 1, name: "帝王蟹", icon: "./img/diwangxie.png", count: 1 },
            { id: 1, name: "白开水", icon: "./img/water.png", count: 1 },
            { id: 1, name: "金枪鱼", icon: "./img/jinqiangyu.png", count: 1 },
            { id: 1, name: "咖啡", icon: "./img/coffee.png", count: 1 }
          ]
        },
        {
          label: "皮肤",
          items: [
            { id: 1, name: "中华田园猫", icon: "./img/zhonghuatianyuanmao.png" },
            { id: 1, name: "布偶", icon: "./img/buou.png" },
            { id: 1, name: "美短", icon: "./img/meiduan.png" },
            { id: 1, name: "折耳", icon: "./img/zheer.png" }
          ]
        },
        {
          label: "优惠券",
          items: [
            { id: 1, name: "4.8折", icon: "./img/48zhe.png" },
            { id: 2, name: "3.8折", icon: "./img/38zhe.png" },
            { id: 3, name: "2.8折", icon: "./img/28zhe.png" },
            { id: 4, name: "1.8折", icon: "./img/18zhe.png" }
          ]
        },
        { label: "福卡", items: [{ id: 1, name: "西湖福", icon: "./img/xihu.png" }] }
      ],
      achievents: [
        {
          name: "星星之火",
          description: "FFFFFFF",
          isGet: false
        }
      ]
    },
    store: [
      {
        label: "食物",
        items: [
          { id: 1, name: "小鱼干", icon: "./img/xiaoyugan.png" },
          { id: 1, name: "牛肉", icon: "./img/beef.png" },
          { id: 1, name: "罐头", icon: "./img/guantou.png" },
          { id: 1, name: "帝王蟹", icon: "./img/diwangxie.png" },
          { id: 1, name: "白开水", icon: "./img/water.png" },
          { id: 1, name: "金枪鱼", icon: "./img/jinqiangyu.png" },
          { id: 1, name: "咖啡", icon: "./img/coffee.png" }
        ]
      },
      {
        label: "皮肤",
        items: [
          { id: 1, name: "中华田园猫", icon: "./img/zhonghuatianyuanmao.png" },
          { id: 1, name: "布偶", icon: "./img/buou.png" },
          { id: 1, name: "美短", icon: "./img/meiduan.png" },
          { id: 1, name: "折耳", icon: "./img/zheer.png" }
        ]
      },
      {
        label: "优惠券",
        items: [
          { id: 1, name: "4.8折", icon: "./img/48zhe.png" },
          { id: 1, name: "3.8折", icon: "./img/38zhe.png" },
          { id: 1, name: "2.8折", icon: "./img/28zhe.png" },
          { id: 1, name: "1.8折", icon: "./img/18zhe.png" }
        ]
      }
    ],
    station: {
      next: "龙翔桥"
    },
    system: {
      playBackmusic: true,
      XDMap: true
    }
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
      return state.user.pet;
    },
    userInfo: state => {
      return state.user;
    },
    storeInfo: state => {
      return state.store;
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
    },
    stationInfo: state => {
      return state.station;
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
      state.user.pet = Info;
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
