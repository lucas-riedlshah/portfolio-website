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
  white-space: nowrap;
  border-top: 0.04em solid white;
  height: 2em;
  display: grid;
  align-items: center;
  color: inherit;
  text-decoration: none;
  transition: font-size 0.5s, padding-left 0.5s;
}

.menu-item:hover {
  font-size: clamp(0.8rem, 9vw, 10rem);
  padding-left: 4vw;
}

.menu-item:active {
  text-decoration: line-through;
}

.menu-item:last-child {
  border-bottom: 0.04em solid white;
}
</style>
