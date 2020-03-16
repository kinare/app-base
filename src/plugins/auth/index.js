import routes from "./routes";
import store from "./store";
import service from "./service";

export default {
  install(Vue, options) {
    options.router.addRoutes(routes);
    options.store.registerModule("auth", store);

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$auth = service;
  }
};
