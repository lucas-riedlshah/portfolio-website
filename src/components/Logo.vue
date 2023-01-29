<script setup lang="ts">
defineProps<{ small?: boolean }>();
</script>

<template>
  <RouterLink to="/" :class="{ logo: true, 'logo--small': small }">Lucas <br />RiedlShah</RouterLink>
</template>

<style scoped>
.logo {
  font-family: "Bagnard";
  font-size: min(10rem, 10vw, 15vh);
  color: inherit;
  text-decoration: none;
}

.logo--small {
  font-size: min(1.8rem, 10vw);
}

.logo--small > br {
  display: none;
}
</style>
