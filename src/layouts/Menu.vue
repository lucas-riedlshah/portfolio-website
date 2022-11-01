<script setup lang="ts">
import CloseButton from '../components/CloseButton.vue';
import LogoVue from '../components/Logo.vue';
import MenuContainer from '../components/MenuContainer.vue';
</script>

<template>
  <div class="menu gradient-background">
    <LogoVue small class="menu__logo" />
    <CloseButton class="menu__close-button" />
    <MenuContainer class="menu__list">
      <RouterView />
    </MenuContainer>
  </div>
</template>

<style scoped>
.menu {
  padding: 1.5rem;
  min-height: calc(100vh - 3rem);
  height: 100%;
  display: grid;
  grid-template-areas:
    "logo close-button"
    "menu menu";
  grid-template-columns: min-content auto;
  grid-template-rows: min-content auto;
}

.menu__logo {
  grid-area: logo;
}

.menu__close-button {
  grid-area: close-button;
  justify-self: self-end;
}

.menu__list {
  grid-area: menu;
}
</style>
