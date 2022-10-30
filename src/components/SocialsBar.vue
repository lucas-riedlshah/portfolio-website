<script setup lang="ts">
import SocialButton from "../components/SocialButton.vue"
import githubIconUrl from "../assets/GitHub.svg"
import instagramIconUrl from "../assets/Instagram.svg"
import twitterIconUrl from "../assets/Twitter.svg"
</script>

<template>
  <div class="socials-bar">
    <SocialButton :src=githubIconUrl />
    <SocialButton :src=instagramIconUrl />
    <SocialButton :src=twitterIconUrl />
    <!-- <SocialButton>+</SocialButton> -->
  </div>
</template>

<style scoped>
.socials-bar {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  height: 100%;
}

@media only screen and (min-width: 110vmin) {
  .socials-bar {
    flex-direction: row;
    gap: min(15px, 1vw);
    justify-content: flex-start;
  }
}
</style>
