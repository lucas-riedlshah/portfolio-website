<script setup lang="ts">
import CloseButton from '../components/CloseButton.vue';
import LogoVue from '../components/Logo.vue';
</script>

<template>
  <div class="container">
    <LogoVue small class="container__logo" />
    <CloseButton class="container__close-button" />
    <div class="container__content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 1.5rem;
  min-height: calc(100vh - 3rem);
  height: 100%;
  display: grid;
  grid-template-areas:
    "logo close-button"
    "container container";
  grid-template-columns: min-content auto;
  grid-template-rows: min-content auto;
}

.container__logo {
  grid-area: logo;
}

.container__close-button {
  grid-area: close-button;
  justify-self: self-end;
}

.container__content {
  grid-area: container;
  width: calc(100vmin - 3rem);
  justify-self: center;
}
</style>
