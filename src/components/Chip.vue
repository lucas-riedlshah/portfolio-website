<script setup lang="ts">
defineProps<{ selected?: boolean }>()
</script>

<template>
  <button :class="{chip: true, 'chip--selected': selected}" type="button">
    <span class="chip__icon">&check;</span>
    <span><slot></slot></span>
  </button>
</template>

<style scoped>
.chip {
  font-size: clamp(1em, 2vw, 1.5rem);
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0 1em;
  height: 2.5em;
  outline: none;
  color: white;
  border: 1pt solid white;
  border-radius: 1.25em;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  font-family: inherit;
  font-weight: 400;
  background: transparent;
}

.chip--selected {
  background-color: rgba(155, 255, 155, 0.3);
  border: none;
}

.chip__icon {
  display: none;
}

.chip--selected .chip__icon {
  display: initial;
}
</style>
