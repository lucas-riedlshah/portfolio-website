import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import "prism-themes/themes/prism-lucario.css";
import MasonryWall from "@yeger/vue-masonry-wall";

import "./style.css";
import App from "./App.vue";
import router from "./router";
import ImageGallery from "./components/ImageGallery/ImageGallery.vue";
import ItchIFrame from "./components/ItchIFrame.vue";
import MarkdownWrapper from "./components/MarkdownWrapper.vue";
import ViewMore from "./components/ImageGallery/ViewMore.vue";

createApp(App)
  .use(createHead({ titleTemplate: "%s - Lucas RiedlShah" }))
  .use(router)
  .use(MasonryWall)
  .component("ImageGallery", ImageGallery)
  .component("ViewMore", ViewMore)
  .component("ItchIFrame", ItchIFrame)
  .component("markdownwrapper", MarkdownWrapper)
  .mount("#app");
