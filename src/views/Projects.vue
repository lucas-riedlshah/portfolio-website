<script setup lang="ts">
import CloseButton from '../components/CloseButton.vue';
import LogoVue from '../components/Logo.vue';

</script>

<template>
  <div class="projects gradient-background">
    <LogoVue small class="projects__logo" />
    <CloseButton class="projects__close-button" />
  </div>
</template>

<style scoped>
.projects {
  padding: 1.5rem;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "logo close-button"
    "list list";
  grid-template-rows: min-content auto;
}

.projects__logo {
  grid-area: logo;
}

.projects__close-button {
  grid-area: close-button;
  justify-self: self-end;
}
</style>
