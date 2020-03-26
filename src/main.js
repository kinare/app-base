import Vue from "vue";
import Buefy from "buefy";
import "./registerServiceWorker";
import { router } from "./router";
import store from "./store";
import App from "./App";
import Landing from "./plugins/landing";
import Auth from "./plugins/auth";
import "@mdi/font/css/materialdesignicons.css";
import * as VueGoogleMaps from "vue2-google-maps";

const options = { router, store };
Vue.config.productionTip = true;

Vue.use(Buefy);
Vue.use(Landing, options);
Vue.use(Auth, options);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyADD21bvTfmi_P1z37l87_RllHP3yldvAU",
    v: "OPTIONAL VERSION NUMBER"
    // libraries: 'places', //// If you need to use place input
  }
});
window.Event = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
