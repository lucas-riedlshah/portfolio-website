<script setup lang="ts">
const props = defineProps<{ title?: string, description?: string, href: string; image?: string }>();
</script>

<template>
  <div class="view-more">
    <img
      v-if="image"
      :src="image"
      class="view-more__bg"
    />
    <div class="view-more__info">
      <p v-if="props?.title" class="info__title">{{ props.title }}</p>
      <p v-if="props?.description" class="info__description">{{ props.description }}</p>
      <a :href="href" class="info__button">View More →</a>
    </div>
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

.view-more__info {
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  gap: 1em;
}

.info__title {
  font-size: 2em;
  font-family: "Bagnard";
  /* text-shadow: 0 0 5px rgba(var(--color-on-surface), 0.25); */
  margin: 0;
  line-height: 1ch;
}

.info__description {
  font-family: "Josefin Sans";
  margin: 0;
  line-height: 1ch;
  /* text-shadow: 0 0 5px rgba(var(--color-on-surface), 0.25); */
}

.info__button {
  font-family: Josefin Sans;
  text-decoration: none;
  padding: 0.7em 2em;
  font-size: 1.2em;
  border-radius: 1.3em;
  background-color: rgb(var(--color-background));
  color: rgb(var(--color-primary));
  position: relative;
  transition: backdrop-filter 0.5s ease-out, padding 0.5s ease-out;
}

.info__button:hover {
  padding: 0.6em 2.2em;
}

body.dark-mode .info__button {
  color: rgb(var(--color-on-background));
}
</style>
