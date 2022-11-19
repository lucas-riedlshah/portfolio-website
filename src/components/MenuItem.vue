<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<template>
  <RouterLink :to="to" class="menu-item">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
.menu-item {
  font-size: clamp(0.4rem, 7vw, 4rem);
  white-space: nowrap;
  border-bottom: 0.04em solid white;
  height: 2em;
  display: grid;
  align-items: center;
  color: inherit;
  text-decoration: none;
  transition: font-size 0.5s 0.15s, padding-left 0.5s 0.15s;
}

.menu-item:first-of-type {
  border-top: 0.04em solid white;
}

@media (hover: hover) {
  .menu-item:hover,
  .menu-item:focus {
    font-size: clamp(0.4rem, 9vw, 6rem);
    padding-left: 4vw;
  }
}

.menu-item:active {
  text-decoration: line-through;
}
</style>
