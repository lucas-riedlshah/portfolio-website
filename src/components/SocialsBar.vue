<script setup lang="ts">
</script>

<template>
  <div class="socials-bar">
    <slot></slot>
  </div>
</template>

<style scoped>
.socials-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

@media only screen and (min-width: 110vmin) {
  .socials-bar {
    gap: min(15px, 1vw);
  }
}
</style>
