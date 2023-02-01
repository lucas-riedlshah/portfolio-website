<script setup lang="ts">
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";

const route = useRoute()

useHead({ title: <string>route.meta.title })

</script>

<template>
  <div class="heading">
    <h1 class="title">{{ $route.meta.title }}</h1>
    <p class="year">{{ $route.meta.year }}</p>
    <span class="tags">
      <RouterLink v-for="tag in $route.meta.tags" :to="{ path: '/', query: { tags: tag } }" class="tags__tag">{{
          tag
      }}
      </RouterLink>
    </span>
  </div>
  <slot></slot>
</template>

<style scoped>
.heading {
  font-size: clamp(1em, 2vw, 1.5rem);
  text-align: center;
}

.title {
  margin-bottom: 0;
}

.year {
  margin-top: 0;
}

.tags {
  display: flex;
  justify-content: center;
  gap: 0.5em;
  margin-block: 1em;
}

.tags > a {
  text-decoration: none;
  color: rgb(var(--color-primary));
  background: linear-gradient(rgba(var(--color-primary), 0.1), rgba(var(--color-primary), 0.15));
  border: 1pt solid rgba(var(--color-primary), 0.3);
  padding: 0.3em 0.7em;
  border-radius: 1.6em;
}
</style>

<style>
.markdown-body {
  font-size: clamp(1em, 2vw, 1.5rem);
  font-family: "Atkinson Hyperlegible";
}

.markdown-body .header-anchor {
  text-decoration: none;
  color: inherit;
}

.markdown-body > * {
  margin-top: 0;
}
</style>
 