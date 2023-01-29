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
  /* flex-wrap: wrap; */
  gap: clamp(0.2rem, 1vw, 3rem);
}
</style>
