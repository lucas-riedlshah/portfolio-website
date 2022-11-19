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

.social-button:active {
  padding: 0 0 0.2em 0;
}

.social-button__button {
  width: var(--size);
  height: var(--size);
  line-height: 1;
  border-radius: 100%;
  box-shadow: 0 0 10px rgba(var(--color-on-background), 0.1);
  background-color: rgb(var(--color-background));
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: box-shadow 0.2s;
}

.social-button:hover > .social-button__button {
  box-shadow: 0 5px 15px rgba(var(--color-on-background), 0.15);
}

.social-button:active > .social-button__button {
  box-shadow: 0 10px 20px rgba(var(--color-on-background), 0.2);
}

@media only screen and (min-width: 110vmin) {
  .social-button {
    --size: clamp(20px, 10vw, 100px);
  }
}
</style>
