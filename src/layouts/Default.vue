<script setup lang="ts">
import MenuButton from '../components/MenuButton.vue';
import LogoVue from '../components/Logo.vue';
import smileIconUrl from '../assets/smile.svg'
</script>

<template>
  <div class="container">
    <div class="top-bar">
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
  padding: 1.5rem;
  display: grid;
  grid-template-columns: min-content auto;
}

.top-bar__menu-button {
  justify-self: self-end;
}

.top-bar,
.content>* {
  width: calc(min(100%, 1100px) - 3rem);
  margin-inline: auto;
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
  width: calc(min(100%, 1100px) - 3rem);
  margin-inline: auto;
}

.content>.markdown-body,
.content>.markdown-body>*.full-width {
  width: initial;
  margin: initial;
}
</style>
