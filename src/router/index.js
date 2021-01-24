import Vue from "vue";
import Router from "vue-router";
// import Register from "../views/register/index.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/rigister",
    name: "Rigister",
    // component: Register
    component: () =>
      import(/* webpackChunkName: "Rigister" */ "../views/register/index.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/login/index.vue")
  }
];

const router = new Router({
  routes
});

// 路由守卫

export default router;
