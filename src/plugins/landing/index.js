import routes from "./routes";
import store from "./store";

export default {
  install(Vue, options) {
    /* register store and routes */
    options.router.addRoutes(routes);
    options.store.registerModule("test", store);
  }
};
