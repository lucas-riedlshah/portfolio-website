<template>
  <div
    class="gallery"
    :style="{
      height: 'calc(' + getItemCount() + ' * 100vh)',
      zIndex: overlap && state.scrollPosition > getItemCount() - 1 ? 1 : 0,
      marginBottom: '-75vh'
    }"
  >
    <div class="gallery__sticky" ref="sticky">
      <div
        class="gallery__container"
        :style="{
          transform: getContainerTransform(),
        }"
      >
        <template v-for="(vnode, index) in $slots.default?.()" :key="index">
          <button
            v-if="index > 0"
            :style="{
              transform: getSlideTransform(index),
              opacity: fadeNavButtons(index),
            }"
            class="gallery__slide-prev-button"
            @click="scrollToIndex(index - 1)"
          ><span>←</span></button>
          <component
            :is="vnode"
            :style="{ transform: getSlideTransform(index) }"
            class="gallery__slide"
          />
          <button
            v-if="index < getItemCount() - 1"
            :style="{
              transform: getSlideTransform(index),
              opacity: fadeNavButtons(index),
            }"
            class="gallery__slide-next-button"
            @click="scrollToIndex(index + 1)"
          ><span>→</span></button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref, useSlots } from "vue";

const props = defineProps({
  movement: {
    type: Function,
    default: null
  },
  overlap: {
    type: Boolean,
    default: true
  }
});

const slots = useSlots();

const sticky = ref(null);
let doUpdateScrollPositions = true;
let stickyHeight = 0;

const state = reactive({
  smallDisplay: window.matchMedia("(hover: none), (max-width: 800px)").matches,
  scrollPosition: 0,
});

const updateStickyHeight = () => {
  if (sticky.value && sticky.value.offsetParent) {
    stickyHeight =
      sticky.value.offsetParent.offsetHeight - sticky.value.offsetHeight;
  }
};

const updateScrollPositions = () => {
  if (!doUpdateScrollPositions) return;
  if (sticky.value && stickyHeight > 0) {
    state.scrollPosition =
      Math.min(1, sticky.value.offsetTop / stickyHeight) * getItemCount();
  }
  window.requestAnimationFrame(updateScrollPositions);
};

const getXPosition = (position, simpleMode) => {
  if (simpleMode) {
    return Math.abs(((position + 3) % 4) - 2) - 1;
  }
  const mod = (position / 4) % 1;
  if (mod <= 0.5 && mod > 0) {
    return Math.cos(Math.PI * (position + 1)) * 0.5 + 0.5;
  }
  return (-1 - Math.cos(Math.PI * ((2 * position) / 2 + 1))) * 0.5;
};

const getXYZ = (position, maxPosition, simpleMode = false) => {
  if (props.movement) return props.movement(position, maxPosition, simpleMode)
  const x = getXPosition(position, simpleMode) * 50;
  const y = position * 50;
  const z = position * 100;
  return [x, y, z];
};

const getContainerTransform = () => {
  const [x, y, z] = getXYZ(state.scrollPosition, getItemCount(), state.smallDisplay);
  return `perspective(100px) translate3d(${-x}vw, ${-y}vh, ${z}px)`;
};

const getSlideTransform = (index) => {
  const [x, y, z] = getXYZ(index, getItemCount(), true);
  return `translate3d(calc(-50% + ${x}vw), calc(-50% + ${y}vh), -${z}px)`;
};

const getItemCount = () => {
  return (slots.default?.() ?? []).length
}

const fadeNavButtons = (index) => {
  const t = Math.abs(state.scrollPosition - index) / 0.6;
  return t > 1 ? 0 : 1 - t;
}

const scrollToIndex = (index) => {
  window.scrollTo({ top: sticky.value.offsetParent.offsetTop + index * window.innerHeight * (getItemCount() - 1) / (getItemCount()), behavior: "smooth"})
}

onMounted(() => {
  updateStickyHeight();
  window.addEventListener("resize", updateStickyHeight);
  window.requestAnimationFrame(updateScrollPositions);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateStickyHeight);
  doUpdateScrollPositions = false;
});
</script>

<style scoped>
.gallery {
  position: relative;
  /* pointer-events: none; */
}

.gallery__sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.gallery__container {
  position: relative;
  height: 100vh;
  will-change: transform;
  transform-style: preserve-3d;
}
</style>

<style>
.gallery__slide {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 90vmin;
  max-height: 90vmin;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.gallery__slide-next-button,
.gallery__slide-prev-button {
  position: absolute;
  padding: 0;
  top: 50%;
  font-size: 1.5em;
  width: 1.5em;
  height: 3em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-radius: 1em;
  border: none;
  box-shadow: 0 0 5px rgba(var(--color-hover-surface-shadow), 0.5);
  background-color: rgb(var(--color-surface));
  color: rgb(var(--color-on-surface));
}

.gallery__slide-next-button {
  right: calc(50% - 45vmin - 3em);
}

.gallery__slide-prev-button {
  left: calc(50% - 45vmin - 1.5em);
}

@media (orientation: portrait) {
  .gallery__slide-next-button,
  .gallery__slide-prev-button {
    top: initial;
    bottom: calc(50% - 45vmin - 4em);
    width: 5em;
    height: 2em;
  }

  .gallery__slide-next-button {
    right: calc(50% - 8em);
  }

  .gallery__slide-prev-button {
    left: calc(50% - 3em);
  }
}
</style>
