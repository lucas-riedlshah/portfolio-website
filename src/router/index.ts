import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import MainMenu from "../views/MainMenu.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/menu",
    name: "MainMenu",
    component: MainMenu,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
