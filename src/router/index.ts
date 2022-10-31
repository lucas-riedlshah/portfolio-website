import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import MainMenu from "../views/MainMenu.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
    },
  ],
});

export default router;
