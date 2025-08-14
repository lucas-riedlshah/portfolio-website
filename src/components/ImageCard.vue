<script setup lang="ts">
defineProps<{ src?: string, date?: string, pinned?: boolean }>();
</script>

<template>
  <div class="image-card-container" :class="{ 'image-card-container--pinned': pinned }">
    <div class="image-card">
      <img :src="src" class="image-card__image" />
      <div class="image-card__info info">
        <span class="info__title">
          <slot></slot>
        </span>
        <!-- <span class="info__date" v-if="date">{{ " - " + date }}</span> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-card-container {
  position: relative;
  transition: transform 1s;
}

.image-card-container:hover {
  transform: translateY(-0.05rem);
}

.image-card-container::before {
  content: "";
  position: absolute;
  top: 50px;
  left: 50px;
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  z-index: -1;
  box-shadow: 0 0 100px 50px rgba(var(--color-surface-shadow), var(--surface-shadow-intensity));
  transition: box-shadow 1s;
}

.image-card-container:hover::before {
  box-shadow: 0 0 40px 50px rgba(var(--color-hover-surface-shadow), var(--surface-hover-shadow-intensity));
}

.image-card {
  font-size: 2rem;
  background-color: rgb(var(--color-surface));
  color: rgb(var(--color-on-surface));
  border-radius: 0.5rem;
  border: 1pt solid rgba(var(--color-surface-shadow), 0.05);
  transition: border-color 1s;
  overflow: hidden;
}

.image-card-container:hover .image-card {
  border-color: rgba(var(--color-hover-surface-shadow), 0.3);
}

.image-card__image {
  width: 100%;
  display: block;
}

.image-card__info {
  text-align: center;
  margin: 0.4em 0.2em;
}

.info__title {
}

.info__date {
  font-size: 0.6em;
}

.image-card-container--pinned .image-card {
  border-color: rgba(var(--color-hover-surface-shadow), 0.3);
  background-color: color-mix(in srgb, rgb(var(--color-surface)), rgb(var(--color-primary)) 10%);
}
</style>
