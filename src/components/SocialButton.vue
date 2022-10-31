<script setup lang="ts">

defineProps<{ src?: string, href?: string }>()

</script>

<template>
  <a class="social-button" :style="{ backgroundImage: src ? `url('${src}')` : '' }" :href="href" target="_blank">
    <slot></slot>
  </a>
</template>

<style scoped>
.social-button {
  --shadow-color: 0, 0, 0;
  --size: clamp(60px, 10vw, 100px);
  width: var(--size);
  height: var(--size);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--size);
  line-height: 1;
  border-radius: 100%;
  box-shadow: 0 0 10px rgba(var(--shadow-color), 0.1);
  background-color: white;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0.1em 0;
  transition: box-shadow 0.2s, margin 0.2s;
}

.social-button:hover {
  box-shadow: 0 5px 15px rgba(var(--shadow-color), 0.15);
  margin: 0.05em 0 0.15em 0;
}

.social-button:active {
  box-shadow: 0 10px 20px rgba(var(--shadow-color), 0.2);
  margin: 0 0 0.2em 0;
}

@media only screen and (min-width: 110vmin) {
  .social-button {
    --size: clamp(20px, 10vw, 100px);
  }
}

@media (prefers-color-scheme: dark) {
  .social-button {
    background-color: rgb(25, 25, 25);
    outline: 1pt solid rgb(30, 30, 30);
    --shadow-color: 220, 220, 220;
  }
}
</style>
