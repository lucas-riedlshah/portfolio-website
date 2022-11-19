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
  position: relative;
  font-size: 2rem;
  padding: 0.2em;
  background-color: rgb(var(--color-surface));
  color: rgb(var(--color-on-surface));
  border-radius: 0.5rem;
}

.image-card__image {
  width: calc(100% - 0.2em);
  padding: 0.1em;
}

.image-card::before {
  content: "";
  position: absolute;
  top: 50px;
  left: 50px;
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  z-index: -1;
  box-shadow: 0 0 150px 50px rgba(var(--color-on-background), 0.4);
}

.image-card__title {
  display: block;
  text-align: center;
}
</style>
