import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store/index";

import { IS_USER_AUTHENTICATE_GETTER } from "./../store/storeConstant";

const Login = () =>
  import(/* webpackChunkName: "Login" */ "../components/Auth/Login.vue");
const Register = () => import("../components/Auth/Register.vue");
const Home = () => import("../views/Home.vue");
const Posts = () => import("../views/Posts.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { auth: false },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { auth: false },
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
    meta: { auth: true },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(store.state.auth);
  console.log("From index route", to);
  if (
    "auth" in to.meta &&
    to.meta.auth &&
    !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
  ) {
    next("/login");
  } else if (
    "auth" in to.meta &&
    !to.meta.auth &&
    store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
  ) {
    next("/posts");
  } else {
    next();
  }
});

export default router;
