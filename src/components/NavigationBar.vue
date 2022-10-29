<script setup lang="ts">
</script>

<template>
  <div class="navigation-bar">
    <slot></slot>
  </div>
</template>

<style scoped>
.navigation-bar {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  gap: 2vw;
}
</style>
