<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { RouteRecordRaw, useRouter } from "vue-router";
import generatedPages from "virtual:generated-pages"

import MenuItemVue from '../components/MenuItem.vue';
import Chip from '../components/Chip.vue'

const router = useRouter();

const selectedTags = ref(new Set(
  router.currentRoute.value.query.tags
    ? (<string>router.currentRoute.value.query.tags).split(',')
    : []
))

watchEffect(() => router.push({ query: { tags: [...selectedTags.value].join(",") } }))

selectedTags.value = new Set([...selectedTags.value].filter(tag => getValidTags().includes(tag)))

/**
 * Adds the tag to the current search.
 */
function selectTag(tag: string) {
  selectedTags.value.add(tag)
}


/**
 * Removes the tag from the current search.
 */
function deselectTag(tag: string) {
  selectedTags.value.delete(tag)
}

/**
 * Returns a list of routes marked to be included in search results.
 */
function getSearchablePages() {
  return generatedPages.filter(route => route.meta?.showInSearch)
}

/**
 * Returns a list of tags which exist in on at least one route.
 */
function getValidTags(): string[] {
  return <string[]>[...(new Set(
    getSearchablePages()
      .map(route => route.meta?.tags)
      .flat()
  ))]
}

/**
 * Returns a list of tags which are available to be selected, 
 * according to those which are already selected.
 */
function getAvailableTags(): string[] {
  return getValidTags()
    .filter(tag =>
      !selectedTags.value.has(tag) &&
      getSearchResults().find(route => (<string[]>route.meta?.tags).includes(tag)))
}

function getSearchResults(): RouteRecordRaw[] {
  return getSearchablePages()
    .filter(route => {
      for (let tag of selectedTags.value)
        if (!(<string[]>route.meta?.tags).includes(tag)) return false
      return true
    })
}
</script>

<route lang="yaml">
meta:
  gradientBackground: true
</route>

<template>
  <div class="tags-container">
    <Chip selected v-for="tag in selectedTags" @click="deselectTag(tag)">{{ tag }}</Chip>
    <Chip v-for="tag in getAvailableTags()" @click="selectTag(tag)">{{ tag }}</Chip>
  </div>
  <div>
    <MenuItemVue v-for="route in getSearchResults()" :to="route.path">{{ route.meta?.title || route.path }}
    </MenuItemVue>
    <span class="no-results-message">There were no results matching the selected tags.</span>
  </div>
</template>

<style scoped>
.tags-container {
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.no-results-message {
  display: none;
  font-size: 2rem;
}

.no-results-message:only-child {
  display: initial;
}
</style>