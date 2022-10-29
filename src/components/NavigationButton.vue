<script setup lang="ts">
</script>

<template>
  <span class="navigation-button">
    <slot></slot>
  </span>
</template>

<style scoped>
.navigation-button {
  padding: min(10px, 1vw);
  font-size: min(2rem, 5vw);
}

@media only screen and (min-width: 110vmin) {
  .navigation-button {
    font-size: min(2rem, 2vw);
  }
}
</style>
