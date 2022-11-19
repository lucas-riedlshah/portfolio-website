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
  color: rgb(var(--color-on-primary));
  outline: none;
  border: 1pt solid rgb(var(--color-on-primary));
  border-radius: 1.25em;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  font-family: inherit;
  font-weight: 400;
  background: transparent;
}

.chip--selected {
  background-color: rgba(var(--color-primary), 0.4);
  border: none;
}

.chip__icon {
  display: none;
}

.chip--selected .chip__icon {
  display: initial;
}
</style>
