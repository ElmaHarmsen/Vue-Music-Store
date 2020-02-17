import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/", //default one
      name: "home",
      component: () => import("@/Home")
    },
    {
      path: "/product",
      name: "product",
      component: () => import("@/Product")
    },
    {
      path: "*",
      name: "error",
      component: () => import("@/Error")
    }
  ]
});
