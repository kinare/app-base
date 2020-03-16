import constants from "./constants";
import call from "../../service/http";

export default {
  namespaced: true,
  state: {
    auth: {
      access_token: "",
      expires_in: "",
      refresh_token: "",
      token_type: "",
      user: ""
    }
  },
  mutations: {
    SET_AUTH: (state, logins) => {
      state.auth = { ...logins };
    },
    UNSET_AUTH: state => {
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const key in state.auth) {
        state.auth[key] = "";
      }
    }
  },
  getters: {
    token: state => state.auth.access_token
  },
  actions: {
    login: (context, data) => {
      call("post", constants.login, data).then(res => {
        context.commit("SET_AUTH", res.data);
        Event.$emit("login");
      });
    },
    logout: context => {
      this.$call("get", constants.logout).then(() => {
        context.commit("UNSET_AUTH");
        Event.$emit("logout");
      });
    }
  }
};
