import { createRouter, createWebHistory } from "vue-router";
import generatedPages from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

import Projects from "../views/Projects.vue";

const routes = setupLayouts([
  ...generatedPages,
  {
    // All rotues to pages that are not menus and come under /projects/* must be defined prior to this.
    path: "/projects/:project*",
    component: Projects,
    meta: { gradientBackground: true, isMenu: true },
  },
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
