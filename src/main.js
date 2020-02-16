import Vue from "vue";
import App from "./App.vue";
import "@/assets/fonts.css";
import "material-design-icons/iconfont/material-icons.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
