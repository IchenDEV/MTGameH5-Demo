import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "Event",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/EventView.vue")
      },
      {
        path: "Bag",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/BagView.vue")
      },
      {
        path: "Achievement",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AchievementView.vue")
      },
      {
        path: "Friend",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FriendView.vue")
      },
      {
        path: "Notify",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/NotifyView.vue")
      },
      {
        path: "Game",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/GameView.vue")
      },
      {
        path: "User",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/UserView.vue")
      },
      {
        path: "Store",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/StoreView.vue")
      }
    ]
  },
  {
    path: "/ar",
    name: "AR",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/XRView.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
