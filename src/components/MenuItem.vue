<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<template>
  <RouterLink :to="to" class="menu-item">
    <span>
      <slot></slot>
    </span>
  </RouterLink>
</template>

<style scoped>
.menu-item {
  font-size: clamp(0.8rem, 7vw, 7rem);
  border-top: 0.04em solid white;
  height: 2em;
  display: grid;
  align-items: center;
  color: inherit;
  text-decoration: none;
}

.menu-item:last-child {
  border-bottom: 0.04em solid white;
}
</style>
