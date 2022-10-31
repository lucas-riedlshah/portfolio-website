<script setup lang="ts">
import MenuItemVue from '../components/MenuItem.vue';
import MenuFrame from "./MenuFrame.vue"
import SocialButton from "../components/SocialButton.vue"
import SocialsBar from "../components/SocialsBar.vue"
import githubIconUrl from "../assets/GitHub.svg"
import instagramIconUrl from "../assets/Instagram.svg"
import twitterIconUrl from "../assets/Twitter.svg"
</script>

<template>
  <MenuFrame>
    <SocialsBar class="socials">
      <SocialButton :src=githubIconUrl href="https://github.com/generatively/" />
      <SocialButton :src=instagramIconUrl href="https://www.instagram.com/lucas_riedlshah/" />
      <SocialButton :src=twitterIconUrl href="https://twitter.com/Lucas_RiedlShah" />
    </SocialsBar>
    <MenuItemVue to="/projects">Projects</MenuItemVue>
    <!-- <MenuItemVue to="/work">Work</MenuItemVue>
    <MenuItemVue to="/blog">Blog</MenuItemVue>
    <MenuItemVue to="/contact">Contact</MenuItemVue> -->
  </MenuFrame>
</template>

<style scoped>
.socials {
  margin-bottom: min(1.5rem, 3vw);
}

.socials > * {
  background-color: white;
}
</style>