<script setup lang="ts">
defineProps<{ selected?: boolean, important?: boolean, chipColor?: string }>()
</script>

<template>
  <button 
    :class="{ chip: true, 'chip--selected': selected, 'chip--important': important }"
    :style="{ '--chip-color': chipColor }"
    type="button"
  >
    <span v-if="selected">&check;</span>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
.chip {
  --chip-color: var(--color-primary);
  font-size: clamp(1em, 2vw, 1.5rem);
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0 1em;
  height: 2.5em;
  color: rgb(var(--chip-color));
  outline: none;
  border: none;
  background: rgba(var(--chip-color), 0.08);
  border-radius: 1.25em;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  font-family: inherit;
  font-weight: 400;
}

.chip--important {
  color: rgb(var(--color-important));
  background: rgba(var(--color-important), 0.08);
}

.chip--selected {
  background: linear-gradient(rgba(var(--chip-color), 0.1), rgba(var(--chip-color), 0.15));
  border: 1pt solid rgba(var(--chip-color), 0.3);
}

.chip--selected.chip--important {
  background: linear-gradient(rgba(var(--color-important), 0.1), rgba(var(--color-important), 0.15));
  border: 1pt solid rgba(var(--color-important), 0.3);
}
</style>
