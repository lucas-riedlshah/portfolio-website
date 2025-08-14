<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ src: string, itchioLink: string, width?: number, height?: number }>();
let screenTooSmall = ref(true)

const checkWidth = () => {
    if (!screenTooSmall.value) {
        window.removeEventListener('resize', checkWidth)
        return
    }
    screenTooSmall.value = window.matchMedia(`(max-width: ${props.width || 1000}px)`).matches
}

checkWidth()
if (screenTooSmall.value) window.addEventListener('resize', checkWidth)
</script>

<template>
    <div class="container">
        <div v-if="!screenTooSmall">
            <iframe
                :src="src"
                frameborder="0" 
                scrolling="no"
                :style="{
                    width: width + 'px',
                    height: height + 'px'
                }"
            >
                <a :href="itchioLink">Play on itch.io</a>
            </iframe>
            <p><center>You may need to click in the game window before it will register inputs.</center></p>
        </div>
        <div v-else class="screen-too-small-warn">
            <p>
                Your window or screen is too small to display the game! 
                <br>
                Please resize your window, or
                <a :href="itchioLink">view on itch.io.</a>
            </p>
        </div>
    </div>
</template>

<style scoped>
.container {
    text-align: center;
    margin-block: 20px;
}

iframe {
    justify-self: center;
    width: 960px;
    height: 540px;
    box-shadow: 0 0 50px rgba(var(--color-surface-shadow), 0.1);
    border: 1pt solid color-mix(rgb(var(--color-background)), rgb(var(--color-surface-shadow)), 0.1);
    border-radius: 0.5rem;
}

.screen-too-small-warn {
    background-color: rgba(var(--color-primary), 0.1);
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1pt solid rgba(var(--color-primary), 0.5);
}
</style>
