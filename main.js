import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

import mvBar from "@/components/mys_navBar/mysNavBar";
Vue.component("mvBar", mvBar);

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
