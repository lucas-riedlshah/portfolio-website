<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function back() {
  if (router.options.history.state.back) {
    router.back();
  } else {
    // If there is no previous page (or if it would be leaving the site), redirect to home page.
    router.push('/');
  }
}

</script>

<template>
  <!-- Check route after back to go home if no back exists. -->
  <a class="back-button" @click="back()">&larr;</a>
</template>

<style scoped>
.back-button {
  cursor: pointer;
  user-select: none;
}
</style>
