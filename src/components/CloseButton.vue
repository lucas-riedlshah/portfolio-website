<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function close() {
  if (router.options.history.state.back) {
    router.back();
  } else {
    router.push('/');
  }
}

</script>

<template>
  <!-- Check route after back to go home if no back exists. -->
  <a class="close-button" @click="close()">X</a>
</template>

<style scoped>
.close-button {
  font-size: calc(2.7 * min(1.8rem, 10vw));
  line-height: 1;
  cursor: pointer;
  user-select: none;
}
</style>
