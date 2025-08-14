<script setup lang="ts">
import MenuToggleButton from '../components/MenuToggleButton.vue';
import BackButton from '../components/BackButton.vue';
import LogoVue from '../components/Logo.vue';
import DarkModeToggle from '../components/DarkModeToggle.vue'
import smileIconUrl from '../assets/smile.svg';
import { onMounted, onUnmounted, ref } from 'vue';
import Home from '../views/Home.vue';

let previousScrollY = Infinity
let hideTopBar = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("hashchange", handleHashChange);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("hashchange", handleHashChange);
});

function handleHashChange() {
  hideTopBar.value = true;
}

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
  <hr style="opacity: 0.1" />
  <!-- <Home></Home> -->
</template>

<style scoped>
.container {
  min-height: 100vh;
}

.top-bar {
  width: calc(100% - 6ex);
  font-size: calc(1.5 * min(1.3rem, 5vw));
  position: sticky;
  top: 1rem;
  padding: min(2vw, 1rem) min(4vw, 2rem);
  background-color: rgb(var(--color-background));
  box-shadow: 0 0 5px rgba(var(--color-on-background), 0.1);
  border-radius: 30vw;
  margin: 1rem 0 0 1rem;
  /* padding-inline: calc(0.5 * (100% - (clamp(70%, 1100px, 100%) - 3rem))); */
  display: grid;
  grid-template-columns: 3ex auto 3ex;
  justify-items: center;
  align-items: center;
  z-index: 2;
  transition: top 0.2s;
}

.top-bar--hidden {
  top: -10rem;
}

/* .smile {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 50vmin;
  background-position: center center;
  opacity: 0.025;
} */

@media (min-width: 500px) {
  .top-bar {
    width: calc(min(100%, 20ch) - 6ex);
  }
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

.table-of-contents ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.table-of-contents li {
  border-right: 1px solid rgba(var(--color-on-background), 0.1);
  padding-inline: 0.5em;
}

.table-of-contents li:first-child {
  padding-left: 0;
}

.table-of-contents li:last-child {
  border-right: none;
}

.table-of-contents li a {
  text-decoration: none;
}
</style>
