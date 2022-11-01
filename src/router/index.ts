import { createRouter, createWebHistory } from "vue-router";
import generatedPages from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import MainMenu from "../views/MainMenu.vue";

const routes = setupLayouts([
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: { layout: "Menu" },
  },
  {
    path: "/projects/:project",
    redirect(to) {
      if (
        [
          "/projects/ethereal-deviations",
          "/projects/ethereal",
          "/projects/central-vibrance",
          "/projects/density",
        ].includes(to.path)
      )
        window.location.href = "https://old.generatively.xyz" + to.path;
      return { path: "/projects" };
    },
  },
  {
    path: "/menu",
    name: "MainMenu",
    component: MainMenu,
    meta: { layout: "Menu" },
  },
  ...generatedPages,
]);

console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
