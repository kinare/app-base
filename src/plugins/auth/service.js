import { appName } from "@/environment/environment";

export default {
  token: window.localStorage.getItem(`${appName}_token`),

  check: () => !!this.token,

  login: token => window.localStorage.setItem(`${appName}_token`, token),

  logout: () => window.localStorage.removeItem(`${appName}_token`)
};
