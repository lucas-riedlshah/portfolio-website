<script setup lang="ts">
import { useHead } from "@vueuse/head";

import LogoVue from '../components/Logo.vue';
import SloganVue from '../components/Slogan.vue';
import SocialsBar from "../components/SocialsBar.vue"
import NavigationButton from "../components/NavigationButton.vue"
import NavigationBar from "../components/NavigationBar.vue"
import SocialButton from "../components/SocialButton.vue"
import Search from "../components/Search.vue"
import DarkModeToggle from '../components/DarkModeToggle.vue'
import githubIconUrl from "../assets/GitHub.svg"
import instagramIconUrl from "../assets/Instagram.svg"
import twitterIconUrl from "../assets/Twitter.svg"

useHead({ title: "Lucas RiedlShah", titleTemplate: '%s' })
</script>

<route lang="yaml">
  path: '/'
  meta:
    layout: Empty
</route>

<template>
  <div class="home">
    <div class="home__info info">
      <DarkModeToggle class="info__dark-mode-toggle" />
      <LogoVue class="info__logo" />
      <SloganVue class="info__slogan" />
      <SocialsBar class="info__socials">
        <SocialButton :src=githubIconUrl href="https://github.com/lucas-riedlshah/" />
        <SocialButton :src=instagramIconUrl href="https://www.instagram.com/lucas_riedlshah/" />
        <SocialButton :src=twitterIconUrl href="https://twitter.com/Lucas_RiedlShah" />
        <!-- <SocialButton>+</SocialButton> -->
      </SocialsBar>
    </div>
    <div class="home__navigation">
      <!-- <NavigationBar>
        <NavigationButton to="/projects">Projects</NavigationButton>
        <NavigationButton to="/work">Work</NavigationButton>
        <NavigationButton to="/blog">Blog</NavigationButton>
        <NavigationButton to="/contact">Contact</NavigationButton>
      </NavigationBar> -->
      <Search />
    </div>
  </div>
</template>

<style scoped>
.home {
  /* height: 100vh; */
  display: grid;
  grid-template-areas:
    "info"
    "navigation";
  grid-template-rows: min-content auto;
}

.home__info {
  padding: min(4rem, 4vw);
  padding-bottom: 0;
  grid-area: info;
}

.home__navigation {
  grid-area: navigation;
  padding: min(4rem, 4vw);
  padding-top: 0;
}

.info {
  display: grid;
  grid-template-areas:
    "logo dark-mode-toggle"
    "slogan slogan"
    "socials socials"
    ;
}

.info__logo {
  grid-area: logo;
  align-self: flex-end;
}

.info__dark-mode-toggle {
  justify-self: right;
}

.info__socials {
  grid-area: socials;
  align-self: center;
  flex-direction: row;
  height: 100%;
  margin-block-end: 1.2rem;
}

.info__slogan {
  grid-area: slogan;
  align-self: flex-start;
}

@media only screen and (min-width: 110vmin) {
  .home {
    grid-template-areas: "info navigation";
    grid-template-rows: initial;
    grid-template-columns: min-content 1fr;
    justify-content: space-between;
  }

  .home__navigation {
    padding-top: min(4rem, 4vw);
  }

  .home__info {
    align-self: start;
    position: sticky;
    top: 0;
    /* padding-bottom: min(4rem, 4vw); */
    grid-template-areas:
      "dark-mode-toggle"
      "logo"
      "slogan"
      "socials"
      ;
  }

  .info {
    align-content: center;
    min-height: calc(100vh - 2 * min(4rem, 4vw));
  }

  .info__dark-mode-toggle {
    position: fixed;
    bottom: 10px;
    left: 10px;
  }
}
</style>
