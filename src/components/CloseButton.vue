<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.path);

</script>

<template>
  <!-- Check route after back to go home if no back exists. -->
  <a class="close-button" @click="$router.back(); if ($route.path == '/projects') $router.push('/');">X</a>
</template>

<style scoped>
.close-button {
  font-size: calc(2.7 * min(1.8rem, 10vw));
  line-height: 1;
  cursor: pointer;
  user-select: none;
}
</style>
