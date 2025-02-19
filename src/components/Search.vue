<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { onBeforeRouteLeave, RouteRecordRaw, useRouter } from "vue-router";
import { useHead } from "@vueuse/head";
import generatedPages from "virtual:generated-pages"

import ImageCard from '../components/ImageCard.vue';
import Chip from '../components/Chip.vue'

const MAIN_CATEGORY_TAGS = ['Projects', 'Work']
const MEDIUM_TAGS = ['Oil on Canvas', 'Python', 'SQL', 'Flask', 'JavaScript', 'TypeScript', 'p5.js', 'C# / .NET', 'Unity', 'HTML / CSS', 'C', 'Arduino', 'WebGL', 'Rust', 'Vue']

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

function deselectTags(tags: string[]) {
  for (let tag of tags) {
    deselectTag(tag)
  }
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
  return getAvailableTags().filter(tag => MAIN_CATEGORY_TAGS.includes(tag)).sort()
}

function getAvailableMediumTags(): string[] {
  return getAvailableTags().filter(tag => MEDIUM_TAGS.includes(tag)).sort()
}

function getAvailableOtherTags(): string[] {
  return getAvailableTags().filter(tag => !(MAIN_CATEGORY_TAGS.concat(MEDIUM_TAGS)).includes(tag)).filter(tag => !tag.startsWith(".")).sort()
}

function getSelectedMainTags(): string[] {
  return [...selectedTags.value].filter(tag => MAIN_CATEGORY_TAGS.includes(tag)).sort()
}

function getSelectedMediumTags(): string[] {
  return [...selectedTags.value].filter(tag => MEDIUM_TAGS.includes(tag)).sort()
}

function getSelectedOtherTags(): string[] {
  return [...selectedTags.value].filter(tag => !(MAIN_CATEGORY_TAGS.concat(MEDIUM_TAGS)).includes(tag)).sort()
}

function getSearchResults(): RouteRecordRaw[] {
  return getSearchablePages()
    .filter(route => {
      for (let tag of selectedTags.value)
        if (!(<string[]>route.meta?.tags).includes(tag)) return false
      return true
    })
    .sort((routeA, routeB) => {
      return (<string>routeB.meta?.title) < (<string>routeA.meta?.title) ? 1 : -1
    })
    .sort((routeA, routeB) => {
      let weightA = 0
      let weightB = 0

      let dateA: string = String(routeA.meta?.date)
      let dateB: string = String(routeB.meta?.date)
      if (dateA.length > 4) dateA = "01 " + dateA
      if (dateB.length > 4) dateB = "01 " + dateB
      weightA += Math.sign(Date.parse(dateA) - Date.parse(dateB))

      weightA += routeA.meta?.pinned ? 10 : 0
      weightB += routeB.meta?.pinned ? 10 : 0
      
      return weightB - weightA
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
  <div class="tags-container">
    <!-- Main Category Tags -->
    <div class="tags">
      <Chip chip-color="var(--color-important)" selected v-for="tag in getSelectedMainTags()" @click="deselectTag(tag)">{{ tag }}</Chip>
      <Chip chip-color="var(--color-important)" v-for="tag in getAvailableMainTags()" @click="selectTag(tag)">{{ tag }}</Chip>
      <Chip chip-color="transparent" class="tags__clear-button" v-if="getSelectedMainTags().length > 0" @click="deselectTags(MAIN_CATEGORY_TAGS)">Clear</Chip>
    </div>
    <!-- Medium Tags -->
    <div class="tags">
      <Chip chip-color="138, 92, 255" selected v-for="tag in getSelectedMediumTags()" @click="deselectTag(tag)">{{ tag }}</Chip>
      <Chip chip-color="138, 92, 255" v-for="tag in getAvailableMediumTags()" @click="selectTag(tag)">{{ tag }}</Chip>
      <Chip chip-color="transparent" class="tags__clear-button" v-if="getSelectedMediumTags().length > 0" @click="deselectTags(MEDIUM_TAGS)">Clear</Chip>
    </div>
    <!-- All Other Tags -->
    <div class="tags">
      <Chip selected v-for="tag in getSelectedOtherTags()" @click="deselectTag(tag)">{{ tag.replace(/^./, '') }}</Chip>
      <Chip v-for="tag in getAvailableOtherTags()" @click="selectTag(tag)">{{ tag }}</Chip>
      <Chip chip-color="transparent" class="tags__clear-button" v-if="getSelectedOtherTags().length > 0" @click="deselectTags(getSelectedOtherTags())">Clear</Chip>
    </div>
  </div>
  <masonry-wall :items="getSearchResults()" :column-width="300" :gap="15">
    <template #default="{ item }">
      <RouterLink :to="item.path" class="search-result-card">
        <ImageCard :src="item.meta.coverImage" :date="String(item.meta.date)" :pinned="item.meta.pinned">{{ item.meta.title }}</ImageCard>
      </RouterLink>
    </template>
  </masonry-wall>
  <span v-if="getSearchResults().length === 0" class="no-results-message">
    There were no results matching the selected tags.
  </span>
</template>

<style scoped>
.tags-container {
  margin-bottom: min(2rem, 2vw);
}

.tags {
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.tags__clear-button {
  padding: 0;
}

.search-result-card {
  text-decoration: none;
}

.no-results-message {
  font-size: 2rem;
}
</style>