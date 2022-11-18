<script setup lang="ts">
defineProps<{ src?: string }>();
</script>

<template>
  <div class="image-card">
    <img :src="src" class="image-card__image" />
    <span class="image-card__title">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.image-card {
  font-size: 2rem;
  padding: 0.2em;
  background-color: rgb(237, 237, 237);
  color: black;
}

.image-card__image {
  width: calc(100% - 2px - 0.2em);
  border: 1px solid black;
  padding: 0.1em;
}

.image-card__title {
  display: block;
  text-align: center;
}
</style>
