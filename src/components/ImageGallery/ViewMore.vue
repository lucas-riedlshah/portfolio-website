<script setup lang="ts">
defineProps<{ href?: string; image?: string }>();
</script>

<template>
  <div class="view-more">
    <img
      v-if="image"
      :src="image"
      class="view-more__bg"
    />
    <a :href="href" class="view-more__button">View More →</a>
  </div>
</template>

<style scoped>
.view-more {
  width: 90vmin;
  height: 90vmin;
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.view-more__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  object-fit: cover;
  transform: scale(4);
  filter: blur(5px);
  z-index: 0;
}

.view-more__button {
  font-family: Josefin Sans;
  text-decoration: none;
  padding: 0.7em 2em;
  font-size: 1.2em;
  border-radius: 1.3em;
  background-color: rgb(var(--color-background));
  color: rgb(var(--color-primary));
  position: relative;
  z-index: 1;
  transition: backdrop-filter 0.5s ease-out, padding 0.5s ease-out;
}

.view-more__button:hover {
  padding: 0.6em 2.2em;
}

body.dark-mode .view-more__button {
  color: rgb(var(--color-on-background));
}
</style>
