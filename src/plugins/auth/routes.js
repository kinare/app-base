import auth from "./views/auth";
import login from "./views/components/login";
import register from "./views/components/register";
import email from "./views/components/email";
import verify from "./views/components/verify";
import password from "./views/components/password";

export default [
  {
    path: "/auth",
    component: auth,
    children: [
      {
        path: "",
        redirect: "/auth/login"
      },
      {
        path: "login",
        component: login
      },
      {
        path: "register",
        component: register
      },
      {
        path: "email",
        component: email
      },
      {
        path: "verify",
        component: verify
      },
      {
        path: "password",
        component: password
      }
    ]
  }
];
