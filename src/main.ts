import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import "prism-themes/themes/prism-lucario.css";
import MasonryWall from "@yeger/vue-masonry-wall";

import "./style.css";
import App from "./App.vue";
import router from "./router";
import ImageGallery from "./components/ImageGallery.vue";
import MarkdownWrapper from "./components/MarkdownWrapper.vue";

if (window.location.hostname == 'generatively.xyz')
  window.location.href = 'http://lucasrs.dev' + window.location.pathname + window.location.search

createApp(App)
  .use(createHead({ titleTemplate: "%s - Lucas RiedlShah" }))
  .use(router)
  .use(MasonryWall)
  .component("ImageGallery", ImageGallery)
  .component("markdownwrapper", MarkdownWrapper)
  .mount("#app");
