<script setup lang="ts">
import MenuToggleButton from '../components/MenuToggleButton.vue';
import BackButton from '../components/BackButton.vue';
import LogoVue from '../components/Logo.vue';
import DarkModeToggle from '../components/DarkModeToggle.vue'
import smileIconUrl from '../assets/smile.svg';
import { onMounted, onUnmounted, ref } from 'vue';

let previousScrollY = Infinity
let hideTopBar = ref(false);

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
  <div :class="{ 'container': true }">
    <div
      :class="{ 'top-bar': true, 'top-bar--hidden': hideTopBar }">
      <BackButton />
      <LogoVue small />
      <DarkModeToggle />
      <!-- <MenuToggleButton :style="{ display: $route.meta.hideMenuToggleButton ? 'none' : '' }" /> -->
    </div>
    <div class="content">
      <RouterView :key="$route.path" />
      <!-- The key attribute ensures that the component is updated on route change.-->
    </div>
    <!-- <div class="smile" :style="{ backgroundImage: `url('${smileIconUrl}')` }"></div> -->
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
}

.top-bar {
  font-size: calc(1.5 * min(1.8rem, 5vw));
  position: sticky;
  top: 0;
  padding: 1rem;
  padding-inline: calc(0.5 * (100% - (clamp(70%, 1100px, 100%) - 3rem)));
  display: grid;
  grid-template-columns: 3ex auto 3ex;
  justify-items: center;
  align-items: center;
  z-index: 2;
  background-color: rgb(var(--color-background));
  border-bottom: 1px solid rgb(var(--color-on-background));
  transition: top 0.2s;
}

.top-bar--hidden {
  top: -10rem;
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
.content,
.content>.markdown-body {
  display: grid;
  grid-template-columns: [left-margin] auto [main] calc(clamp(70%, 1100px, 100%) - 3rem) [right-margin] auto;
}

.content>*,
.content>.markdown-body>* {
  grid-column: main;
}

.content>*.full-width,
.content>.markdown-body,
.content>.markdown-body>*.full-width {
  grid-column: 1 / -1;
}
</style>
