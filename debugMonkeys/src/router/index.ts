import Vue from "vue";
import VueRouter from "vue-router";
import VueAnalytics from "vue-analytics";
import Index from "../views/index.vue";
import Detail from "../views/detail.vue";
import About from "../views/about.vue";

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
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
            resolve(savedPosition);
        }
        if (to.hash) {
          resolve( {selector: to.hash});
        }
        resolve({x: 0, y: 0});
      }, 500);
    });
  },
});

Vue.use(VueAnalytics, {
  id: "UA-164489496-1",
  router
});

export default router;
