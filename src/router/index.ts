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
      component: Projects,
    },
    {
      path: "/menu",
      name: "MainMenu",
      component: MainMenu,
    },
  ],
});

// Temp redirect to old site for projects.
router.afterEach((guard) => {
  if (
    [
      "/projects/ethereal-deviations",
      "/projects/ethereal",
      "/projects/central-vibrance",
      "/projects/density",
    ].includes(guard.path)
  )
    window.open('https://old.generatively.xyz' + guard.path);
});

export default router;
