import { createRouter, createWebHistory } from "vue-router";
import generatedPages from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import MainMenu from "../views/Menu.vue";

const routes = setupLayouts(generatedPages);

console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
