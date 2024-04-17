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

    <img 
      v-if="isEnabled" 
      src="../assets/First_Quarter_Moon_Face.png" 
      alt="First Quarter Moon Face" 
      width="50" 
      height="50" 
    />
    <img 
      v-else 
      src="../assets/Sun_with_Face.png" 
      alt="Sun with Face" 
      width="50" 
      height="50" 
    />
  </Chip>
</template>

<style scoped>
.chip {
  padding: 0;
  height: initial;
}

.chip img {
  display: block;
}
</style>
