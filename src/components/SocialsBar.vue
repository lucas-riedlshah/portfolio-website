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
  gap: clamp(1.5rem, 1vw, 3rem);
}
</style>
