import { createRouter, createWebHistory } from "vue-router";
import generatedPages from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

const routes = setupLayouts([
  ...generatedPages,
  {
    // Not found redirects to homepage.
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
]);

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash };
    return { left: 0, top: 0 };
  },
});

export default router;
