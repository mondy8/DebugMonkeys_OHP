import Vue from "vue";
import VueRouter from "vue-router";
import VueAnalytics from "vue-analytics";
import Index from "../views/index.vue";
import Detail from "../views/detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
       return savedPosition
    } else {
       return { x: 0, y: 0 }
    }
  }
});

Vue.use(VueAnalytics, {
  id: "UA-164489496-1",
  router
});

export default router;
