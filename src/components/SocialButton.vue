<script setup lang="ts">

defineProps<{ src?: string, href?: string }>()

</script>

<template>
  <a class="social-button" :href="href" target="_blank">
    <div class="social-button__button" :style="{ backgroundImage: src ? `url('${src}')` : '' }" >
      <slot></slot>
    </div>
  </a>
</template>

<style scoped>
.social-button {
  --size: clamp(60px, 10vw, 100px);
  font-size: var(--size);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: padding 0.2s;
  padding: 0.1em 0;
}

.social-button:hover {
  padding: 0.05em 0 0.15em 0;
}

.social-button__button {
  width: var(--size);
  height: var(--size);
  line-height: 1;
  border-radius: 100%;
  background-color: transparent;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-color 0.2s;
}

.social-button:hover > .social-button__button {
  background-color: rgba(var(--color-primary), 0.1);
}

.social-button:active > .social-button__button {
  background-color: rgba(var(--color-primary), 0.2);
}

@media only screen and (min-width: 110vmin) {
  .social-button {
    --size: clamp(20px, 10vw, 100px);
  }
}
</style>
