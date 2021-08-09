import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// bring in router
import router from "./router";

Vue.config.productionTip = false;

// bring in ESRI api
import { loadScript } from "esri-loader";

// bring in main css including ESRI css
require("./assets/main.css");

// preload the ArcGIS API
// loadScript({ url: "https://js.arcgis.com/3.33/" });
loadScript({ url: "https://js.arcgis.com/4.4/" });

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
