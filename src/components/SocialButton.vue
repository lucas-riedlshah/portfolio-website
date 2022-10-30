<script setup lang="ts">

defineProps<{ src?: string }>()

</script>

<template>
  <div class="social-button" :style="{ backgroundImage: src ? `url('${src}')` : '' }">
    <slot></slot>
  </div>
</template>

<style scoped>
.social-button {
  --size: clamp(60px, 10vw, 100px);
  width: var(--size);
  height: var(--size);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--size);
  line-height: 1;
  border-radius: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
}

@media only screen and (min-width: 110vmin) {
  .social-button {
    --size: clamp(20px, 10vw, 100px);
  }
}
</style>
