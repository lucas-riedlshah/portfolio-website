<template>
  <!-- Check route after back to go home if no back exists. -->
  <RouterLink class="menu-button" to="/menu">&#926;</RouterLink>
</template>

<style scoped>
.menu-button {
  font-size: calc(2.7 * min(1.8rem, 10vw));
  line-height: 1;
  text-decoration: none;
  color: inherit;
}
</style>
