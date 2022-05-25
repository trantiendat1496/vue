import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/main.vue"),
    children: [
      {
        path: "home",
        component: () => import("@/views/home.vue"),
      },
      {
        path: "employee/:id",
        component: () => import("@/views/employee-detail.vue"),
      },
      {
        path: "employee",
        component: () => import("@/views/employee.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const authState = localStorage.getItem("authState");
  if (to.path !== "/login" && authState !== "signedin") next({ path: "/login" });
  else next();
  next();
});

export default router;
