import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AllListPage from "../views/myList/AllList.vue";
import errorPage from "../views/myList/404_page.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about/:x/:y",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/allList",
    name: "allList",
    component: AllListPage,
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
