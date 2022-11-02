import { createApp } from "vue";
import "prism-themes/themes/prism-lucario.css";

import "./style.css";
import App from "./App.vue";
import router from "./router";
import ImageGallery from "./components/ImageGallery.vue";

createApp(App)
  .use(router)
  .component("ImageGallery", ImageGallery)
  .mount("#app");
