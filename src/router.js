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
      path: "/product/:type/:title",
      name: "product",
      component: () => import("@/Product"),
      props: true
    },
    {
      path: "/spotifyproduct/:spotifytype/:spotifyid",
      name: "spotifyproduct",
      component: () => import("@/SpotifyProduct"),
      props: true
    },
    {
      path: "/spotifyartist/:type/:name",
      name: "spotifyartist",
      component: () => import("@/SpotifyProduct"),
      props: true
    },
    {
      path: "/cds",
      name: "cds",
      component: () => import("@/Cds")
    },
    {
      path: "/artists",
      name: "artists",
      component: () => import("@/Artists")
    },
    {
      path: "/singles",
      name: "singles",
      component: () => import("@/Lps")
    },
    {
      path: "/shoppingcart",
      name: "shoppingcart",
      component: () => import("@/ShoppingCart")
    },
    {
      path: "*",
      name: "error",
      component: () => import("@/Error")
    }
  ]
});
