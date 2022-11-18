<script setup lang="ts">
defineProps<{ src?: string }>();
</script>

<template>
  <div class="image-card">
    <img :src="src" class="image-card__image" />
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.image-card {
  font-size: 2rem;
}

.image-card__image {
  width: 100%;
}
</style>
