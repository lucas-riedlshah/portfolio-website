<script setup lang="ts">
import { useHead } from "@vueuse/head";

import MenuItemVue from '../components/MenuItem.vue';
import SocialButton from "../components/SocialButton.vue"
import SocialsBar from "../components/SocialsBar.vue"
import githubIconUrl from "../assets/GitHub.svg"
import instagramIconUrl from "../assets/Instagram.svg"
import twitterIconUrl from "../assets/Twitter.svg"

useHead({ title: 'Menu' })
</script>

<route lang="yaml">
  meta:
    hideMenuToggleButton: true
</route>

<template>
  <div>
    <SocialsBar class="socials">
      <SocialButton :src=githubIconUrl href="https://github.com/lucas-riedlshah" />
      <SocialButton :src=instagramIconUrl href="https://www.instagram.com/lucas_riedlshah/" />
      <SocialButton :src=twitterIconUrl href="https://twitter.com/Lucas_RiedlShah" />
    </SocialsBar>
    <MenuItemVue to="/search?tags=projects">Projects</MenuItemVue>
    <!-- <MenuItemVue to="/work">Work</MenuItemVue>
  <MenuItemVue to="/blog">Blog</MenuItemVue>
  <MenuItemVue to="/contact">Contact</MenuItemVue> -->
  </div>
</template>

<style scoped>
.socials {
  margin: min(1.5rem, 3vw);
  justify-content: center;
}
</style>