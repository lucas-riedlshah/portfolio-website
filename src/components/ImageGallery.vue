<template>
  <div class="gallery" :style="{
    height: 'calc(' + images.length + ' * 100vh)',
    zIndex: overlap && state.scrollPosition > images.length - 1 ? 1 : 0,
    marginBottom: '-75vh'
  }">
    <div class="gallery__sticky" ref="sticky">
      <div class="gallery__container" :style="{
        transform: getContainerTransform(),
      }">
        <img class="gallery__slide" v-for="(data, index) in images" :key="index" :style="{
          transform: getSlideTransform(index),
        }" :src="data" :alt="'image-' + index" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref } from "vue";
export default {
  name: "GallerySlideShow",
  props: {
    images: Array, // array of url strings for images
    overlap: { default: true, type: Boolean }
  },
  setup(props) {
    onMounted(() => {
      updateStickyHeight();
      window.addEventListener("resize", updateStickyHeight);
      window.requestAnimationFrame(updateScrollPositions);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateStickyHeight);
      doUpdateScrollPositions = false;
    });

    const sticky = ref(null);
    let doUpdateScrollPositions = true;
    let stickyHeight = 0;
    let state = reactive({
      smallDisplay: window.matchMedia("(hover: none), (max-width: 800px)")
        .matches,
      scrollPosition: 0,
    });

    const updateStickyHeight = () => {
      stickyHeight =
        sticky.value.offsetParent.offsetHeight - sticky.value.offsetHeight;
    };

    const updateScrollPositions = () => {
      if (!doUpdateScrollPositions) return
      state.scrollPosition = Math.min(1, sticky.value.offsetTop / stickyHeight) * (props.images.length);
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
      return ((-1 - Math.cos(Math.PI * ((2 * position) / 2 + 1))) * 0.5);
    };

    const getXYZ = (position, simpleMode = false) => {
      const x = getXPosition(position, simpleMode) * 50
      const y = position * 50
      const z = position * 100
      return [x, y, z]
    }

    const getContainerTransform = () => {
      const [x, y, z] = getXYZ(state.scrollPosition, state.smallDisplay)
      return `perspective(100px) translate3d(${-x}vw, ${-y}vh, ${z}px)`;
    };

    const getSlideTransform = (index) => {
      const [x, y, z] = getXYZ(index, true)
      return `translate3d(calc(-50% + ${x}vw), calc(-50% + ${y}vh), -${z}px)`;
    };

    return {
      sticky,
      state,
      getContainerTransform,
      getSlideTransform,
    };
  },
};
</script>

<style scoped>
.gallery {
  position: relative;
  pointer-events: none;
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

.gallery__slide {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 90vmin;
  max-height: 90vmin;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
