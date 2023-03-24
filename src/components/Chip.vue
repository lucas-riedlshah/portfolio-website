<script setup lang="ts">
defineProps<{ selected?: boolean, important?: boolean }>()
</script>

<template>
  <button :class="{ chip: true, 'chip--selected': selected, 'chip--important': important }" type="button">
    <span v-if="selected">&check;</span>
    <span>
      <slot></slot>
    </span>
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
  color: rgb(var(--color-primary));
  outline: none;
  border: none;
  background: rgba(var(--color-primary), 0.08);
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
  background: linear-gradient(rgba(var(--color-primary), 0.1), rgba(var(--color-primary), 0.15));
  border: 1pt solid rgba(var(--color-primary), 0.3);
}

.chip--selected.chip--important {
  background: linear-gradient(rgba(var(--color-important), 0.1), rgba(var(--color-important), 0.15));
  border: 1pt solid rgba(var(--color-important), 0.3);
}
</style>
