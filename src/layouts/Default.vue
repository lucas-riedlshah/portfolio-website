<script setup lang="ts">
import MenuButton from '../components/MenuButton.vue';
import LogoVue from '../components/Logo.vue';
import smileIconUrl from '../assets/smile.svg';
import { onMounted, onUnmounted, ref } from 'vue';

let previousScrollY = window.scrollY
let hideTopBar = ref(true);

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

function handleScroll() {
  hideTopBar.value = window.scrollY > previousScrollY
  previousScrollY = window.scrollY
}

</script>

<template>
  <div class="container">
    <div :class="{ 'top-bar': true, 'top-bar--hidden': hideTopBar }">
      <LogoVue small class="top-bar__logo" />
      <MenuButton class="top-bar__menu-button" />
    </div>
    <div class="content">
      <RouterView />
    </div>
    <div class="smile" :style="{ backgroundImage: `url('${smileIconUrl}')` }"></div>
  </div>
</template>

<style scoped>
.container {
  min-height: calc(100vh - 3rem);
  height: 100%;
}

.top-bar {
  position: sticky;
  top: 0;
  padding: 1.5rem;
  padding-inline: calc(0.5 * (100% - (min(100%, 1100px) - 3rem)));
  display: grid;
  grid-template-columns: min-content auto;
  z-index: 2;
  color: white;
  background-color: black;
  transition: top 0.2s;
}

.top-bar--hidden {
  top: -8rem;
}

.top-bar>a {
  margin-bottom: -0.4ch;
}

.top-bar__menu-button {
  justify-self: self-end;
}

.content>* {
  padding-inline: calc(0.5 * (100% - (min(100%, 1100px) - 3rem)));
}

.smile {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 50vmin;
  background-position: center center;
  opacity: 0.025;
}

@media (prefers-color-scheme: dark) {
  .smile {
    filter: invert();
  }
}
</style>

<style>
.content>.markdown-body>* {
  padding-inline: calc(0.5 * (100% - (min(100%, 1100px) - 3rem)));
}

.content>.markdown-body,
.content>.markdown-body>*.full-width {
  padding-inline: initial;
}
</style>
