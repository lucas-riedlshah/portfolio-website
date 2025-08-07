<script setup lang="ts">
defineProps<{ href?: string; image?: string }>();
</script>

<template>
  <div class="view-more">
    <img
      v-if="image"
      :src="image"
      alt="View more background"
      class="view-more__bg"
      draggable="false"
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
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  filter: blur(5px);
  z-index: 0;
  pointer-events: none;
  user-select: none;
}

.view-more__button {
  font-family: Josefin Sans;
  color: rgb(var(--color-surface));
  text-decoration: none;
  padding: 0.7em 2em;
  font-size: 1.2em;
  border-radius: 9999px;
  border: 1px solid rgba(255,255,255, 0);
  box-shadow:
    inset -3px -6px 5px rgba(255,255,255,0.05),
    inset -6px -6px 20px rgba(255,255,255,0.18),
    -6px -6px 20px rgba(0,0,0,0.15),
    inset 3px 6px 5px rgba(0,0,0,0.05),
    inset 6px 6px 20px rgba(0,0,0,0.18),
    6px 6px 20px rgba(255,255,255,0.15);
  backdrop-filter: blur(20px);
  position: relative;
  z-index: 1;
}
</style>
