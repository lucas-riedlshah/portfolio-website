<script setup lang="ts">
import MenuItemVue from '../components/MenuItem.vue';
import MenuFrame from "./MenuFrame.vue"
</script>

<template>
  <MenuFrame>
    <MenuItemVue to="/projects/ethereal-deviations">Ethereal Deviations</MenuItemVue>
    <MenuItemVue to="/projects/ethereal">Ethereal</MenuItemVue>
    <MenuItemVue to="/projects/central-vibrance">Central Vibrance</MenuItemVue>
    <MenuItemVue to="/projects/density">Density</MenuItemVue>
  </MenuFrame>
</template>