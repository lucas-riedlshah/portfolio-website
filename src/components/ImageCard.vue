<script setup lang="ts">
defineProps<{ src?: string, year?: string }>();
</script>

<template>
  <div class="image-card-container">
    <div class="image-card">
      <img :src="src" class="image-card__image" />
      <div class="image-card__info info">
        <span class="info__title">
          <slot></slot>
        </span>
        <span class="info__year" v-if="year">{{ " - " + year }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-card-container {
  position: relative;
}

.image-card-container::before {
  content: "";
  position: absolute;
  top: 50px;
  left: 50px;
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  z-index: -1;
  box-shadow: 0 0 150px 50px rgba(var(--color-surface-shadow), var(--surface-shadow-intensity));
  transition: box-shadow 1s;
}

.image-card-container:hover::before {
  box-shadow: 0 0 100px 50px rgba(var(--color-hover-surface-shadow), var(--surface-hover-shadow-intensity));
}

.image-card {
  font-size: 2rem;
  background-color: rgb(var(--color-surface));
  color: rgb(var(--color-on-surface));
  border-radius: 0.5rem;
  overflow: hidden;
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

.info__year {
  font-size: 0.6em;
}
</style>
