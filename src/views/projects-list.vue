<script setup lang="ts">
import { useRouter } from "vue-router";
import generatedPages from "virtual:generated-pages"

import MenuItemVue from '../components/MenuItem.vue';
import { ref } from "vue";

const router = useRouter()

function getMenuItems(path: string) {
  const menuItems = [...new Set(generatedPages
    .filter(e => e.path.startsWith(path) && path !== e.path)
    .map(e => e.path
      .split('/')
      .slice(path.split('/').length))
    .map(e => e[0]))
  ]
    .map(e => [e.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' '), path + '/' + e])

  if (menuItems.length == 0) router.push('/projects')

  return menuItems
}

let menuItems = ref(getMenuItems(router.currentRoute.value.path));
</script>

<route lang="yaml">
  path: '/projects'
</route>

<template>
  <div>
    <MenuItemVue v-for="([name, route], _) in menuItems" :to="route">{{ name }}</MenuItemVue>
  </div>
</template>