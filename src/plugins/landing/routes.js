import index from "./views/index";
import landing from "./views/landing";
import gallery from "./views/gallery";
import download from "./views/download";

export default [
  {
    path: "/",
    component: index,
    children: [
      {
        path: "",
        component: landing
      },
      {
        path: "gallery",
        component: gallery
      },
      {
        path: "download",
        component: download
      }
    ]
  }
];
