<script setup lang="ts">
</script>

<template>
  <span class="social-button">
    <slot></slot>
  </span>
</template>

<style scoped>
.social-button {
  margin: min(2vw, 1vmax, 15px);
  width: min(20vw, 6vmax, 100px);
  height: min(20vw, 6vmax, 100px);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
