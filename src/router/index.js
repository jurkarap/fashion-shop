import { createRouter, createWebHashHistory } from "vue-router";
import Catalog from "../components/catalog.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import ("../components/home.vue"),
    props: true
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
    props: true
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/cart.vue"),
    props: true
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
