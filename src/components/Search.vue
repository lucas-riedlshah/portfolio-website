<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { onBeforeRouteLeave, RouteRecordRaw, useRouter } from "vue-router";
import { useHead } from "@vueuse/head";
import generatedPages from "virtual:generated-pages"

import ImageCard from '../components/ImageCard.vue';
import Chip from '../components/Chip.vue'

const MAIN_CATEGORY_TAGS = ['projects'/*, 'work', 'blog' */]

const router = useRouter();

const selectedTags = ref(new Set(
  router.currentRoute.value.query.tags
    ? (<string>router.currentRoute.value.query.tags).split(',').filter(tag => getValidTags().includes(tag))
    : []
))

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

function getAvailableMainTags(): string[] {
  return getAvailableTags().filter(tag => MAIN_CATEGORY_TAGS.includes(tag))
}

function getAvailableOtherTags(): string[] {
  return getAvailableTags().filter(tag => !MAIN_CATEGORY_TAGS.includes(tag))
}

function getSelectedMainTags(): string[] {
  return [...selectedTags.value].filter(tag => MAIN_CATEGORY_TAGS.includes(tag))
}

function getSelectedOtherTags(): string[] {
  return [...selectedTags.value].filter(tag => !MAIN_CATEGORY_TAGS.includes(tag))
}

function getSearchResults(): RouteRecordRaw[] {
  return getSearchablePages()
    .filter(route => {
      for (let tag of selectedTags.value)
        if (!(<string[]>route.meta?.tags).includes(tag)) return false
      return true
    })
}

const stopUpdateQueryParams = watchEffect(() => {
  router.replace({ query: { tags: selectedTags.value.size > 0 ? [...selectedTags.value].join(",") : undefined } })
  useHead({
    title: (selectedTags.value.size > 0 ? 'Search: ' + [...selectedTags.value].join(", ") + ' - ' : '')
      + 'Lucas RiedlShah',
    titleTemplate: '%s'
  })
})
onBeforeRouteLeave(stopUpdateQueryParams)
</script>

<template>
  <div>
    <!-- Main Category Tags -->
    <div class="tags-container">
      <Chip important selected v-for="tag in getSelectedMainTags()" @click="deselectTag(tag)">{{ tag }}</Chip>
      <Chip important v-for="tag in getAvailableMainTags()" @click="selectTag(tag)">{{ tag }}</Chip>
    </div>
    <!-- All Other Tags -->
    <div class="tags-container">
      <Chip selected v-for="tag in getSelectedOtherTags()" @click="deselectTag(tag)">{{ tag }}</Chip>
      <Chip v-for="tag in getAvailableOtherTags()" @click="selectTag(tag)">{{ tag }}</Chip>
    </div>
  </div>
  <masonry-wall :items="getSearchResults()" :column-width="300" :gap="15">
    <template #default="{ item }">
      <RouterLink :to="item.path" class="search-result-card">
        <ImageCard :src="item.meta.coverImage">{{ item.meta.title }}</ImageCard>
      </RouterLink>
    </template>
  </masonry-wall>
  <span v-if="getSearchResults().length === 0" class="no-results-message">
    There were no results matching the selected tags.
  </span>
</template>

<style scoped>
.tags-container {
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.tags-container:first-of-type {
  margin-top: 2rem;
}

.search-result-card {
  text-decoration: none;
}

.no-results-message {
  font-size: 2rem;
}
</style>