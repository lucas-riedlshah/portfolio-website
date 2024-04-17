<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { ref } from 'vue';

const slogan = ref("")

onBeforeMount(() => {
  const slogans: string[] = [
    "",
    "Sometimes I do stuff and post it here.",
    "I do stuff → I post it here → You see it.",
    "This is what happens when you cross the infinite monkey theorem with the monkey's paw.",
    "Hope your day is going well. :)",
    "How does it feel to be the devil's favourite?",
    "I wake up → I put on my cowboy hat → I wake up → I put on my cowboy hat → I wake up → I put on my cowboy hat → so on and so forth.",
    "You hand over the pie. Thurgo eats the pie. Thurgo pats his stomach.",
  ]

  slogan.value = slogans[slogans.length * Math.random() | 0]
  // slogan.value = slogans[slogans.length - 1]
})
</script>

<template>
  <p class="slogan">I am a software engineer located in Auckland, New Zealand.<br>{{ slogan }}</p>
</template>

<style scoped>
.slogan {
  font-family: "Josefin Sans";
  font-size: 1.2rem;
}

@media only screen and (min-width: 1000px) {
  .slogan {
    font-size: 1.5rem;
  }
}
</style>
