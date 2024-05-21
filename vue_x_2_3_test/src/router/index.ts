import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AllListPage from "../views/myList/AllList.vue";
import errorPage from "../views/myList/404_page.vue";
import loginPage from "../views/LoginPage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("vueAuth") == "true") {
        next();
      } else {
        next("loginPage");
      }
    },
  },
  {
    path: "/loginPage",
    name: "loginPage",
    component: loginPage,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/allList",
    name: "allList",
    component: AllListPage,
  },
  {
    path: "/todoAllList",
    name: "todoAllList",
    component: AllListPage,
  },
  {
    path: "/todoEachList",
    name: "todoEachList",
    component: () => import("../views/myList/SingleList.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "errorPage",
    component: errorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
