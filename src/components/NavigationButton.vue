<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<template>
  <RouterLink class="navigation-button" :to="to">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
.navigation-button {
  padding: min(10px, 1vw);
  font-size: min(2rem, 5vw);
  text-decoration: none;
  color: inherit;
}

@media only screen and (min-width: 110vmin) {
  .navigation-button {
    font-size: min(2rem, 2vw);
  }
}
</style>
