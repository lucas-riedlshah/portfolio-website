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
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  height: 100%;
}

@media only screen and (min-width: 110vmin) {
  .socials-bar {
    flex-direction: row;
    gap: min(15px, 1vw);
    justify-content: flex-start;
  }
}
</style>
