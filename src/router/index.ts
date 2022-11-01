import { createRouter, createWebHistory } from "vue-router";
import generatedPages from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

const routes = setupLayouts(generatedPages);

console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
