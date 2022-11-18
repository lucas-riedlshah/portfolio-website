import { createApp } from "vue";
import "prism-themes/themes/prism-lucario.css";
import MasonryWall from '@yeger/vue-masonry-wall'

import "./style.css";
import App from "./App.vue";
import router from "./router";
import ImageGallery from "./components/ImageGallery.vue";

createApp(App)
  .use(router)
  .use(MasonryWall)
  .component("ImageGallery", ImageGallery)
  .mount("#app");
