<script setup lang="ts">
import LogoVue from '../components/Logo.vue';
import SloganVue from '../components/Slogan.vue';
import SocialsBar from "../components/SocialsBar.vue"
import NavigationButton from "../components/NavigationButton.vue"
import NavigationBar from "../components/NavigationBar.vue"
</script>

<template>
  <div class="home">
    <div class="home__info info">
      <LogoVue />
      <SocialsBar />
      <SloganVue />
    </div>
    <div class="home__navigation">
      <NavigationBar>
        <NavigationButton>Projects</NavigationButton>
        <NavigationButton>Work</NavigationButton>
        <NavigationButton>Blog</NavigationButton>
        <NavigationButton>Contact</NavigationButton>
      </NavigationBar>
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
  display: grid;
  grid-template-areas:
    "info"
    "navigation";
  grid-template-rows: 50% 50%;
}

.home__info {
  padding: min(4rem, 4vw);
  grid-area: info;
}

.home__navigation {
  grid-area: navigation;
  background-image: url("../assets/gradient-background.svg");
  background-size: cover;
  background-position: center center;
  color: white;
}

.info {
  display: grid;
  grid-template-areas:
    "logo socials"
    "slogan socials";
  grid-template-columns: auto min-content;
}

@media only screen and (min-width: 110vmin) {
  .home {
    grid-template-areas: "info navigation";
    grid-template-rows: initial;
    grid-template-columns: min-content minmax(auto, 50vw); /** trying to get a gap inbetween the two columns but only sometimes... */
    justify-content: space-between;
  }

  .info {
    display: grid;
    grid-template-areas:
      "logo"
      "socials"
      "slogan";
    grid-template-columns: initial;
    grid-template-rows: min-content min-content min-content;
    align-content: center;
  }
}
</style>
