import Vue from "vue";
import VueRouter from "vue-router";
import VueAnalytics from "vue-analytics";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    meta: {
      title: "デバッグモンキーズ公式サイト",
      desc:
        "デバッグモンキーズは東京・静岡・福岡で活動しているボードゲーム制作団体です。ボードゲームを作っては、猿のようにデバッグをし続ける団体です。" 
    }
  },
  {
    path: "/detail",
    name: "detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

Vue.use(VueAnalytics, {
  id: "UA-164489496-1",
  router
});

export default router;
