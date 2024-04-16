<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Chip from './Chip.vue'

const isEnabled = ref(true)

function toggleDarkMode() {
  isEnabled.value = !isEnabled.value
  window.localStorage.setItem("dark-mode", String(isEnabled.value))
  updateDarkMode()
}

function updateDarkMode() {
  if (window.localStorage.getItem("dark-mode") === null)
    window.localStorage.setItem("dark-mode", String(isEnabled.value))

  isEnabled.value = window.localStorage.getItem("dark-mode") == "true"
    
  if (isEnabled.value) {
    document.body.classList.add("dark-mode")
  } else {
    document.body.classList.remove("dark-mode")
  }
}

onMounted(updateDarkMode)

</script>

<template>
  <Chip
    class="chip"
    chip-color="transparent"
    @click="toggleDarkMode"
  >
    <span v-if="isEnabled">🌛</span>
    <span v-else>🌞</span>
  </Chip>
</template>

<style scoped>
.chip {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  padding: 0;
  height: initial;
  font-size: 3rem;
}
</style>
