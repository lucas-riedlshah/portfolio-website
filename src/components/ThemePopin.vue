<script setup lang="ts">
let expanded = true;
</script>

<template>
  <div :class="{container: true, 'container--expanded': expanded}">
    <h2 class="container__heading">Theme</h2>
    <span class="container__close">X</span>
    <div class="container__content">hello world</div>
  </div>
</template>

<style scoped>
.container {
  top: 2rem;
  position: fixed;
  display: grid;
  grid-template-areas:
    "header close"
    "content content";
  grid-template-rows: min-content auto;
  grid-template-columns: auto min-content;
  align-items: center;
  background-color: rgb(var(--color-surface));
  color: rgb(var(--color-on-surface));
  min-width: 400px;
  padding: 0 1.5rem 0 1rem;
  border-radius: 0 100vmax 100vmax 0;
  box-shadow: 0 0 50px rgba(var(--color-surface-shadow), 0.15);
  transition: border-radius 1s;
}

.container--expanded {
  border-radius: 0 1rem 1rem 0;
}

.container__heading {

}

.container__close {
  font-size: 2rem;
  margin-bottom: -0.4rem;
}

.container__content {
}
</style>