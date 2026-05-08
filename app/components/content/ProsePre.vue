<template>
  <slot />
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  }
})
</script>

<style>
/* We cannot use FfCodeBlock here, but keep the styling in sync with it. */
@tailwind base;
@tailwind components;
@tailwind utilities;

pre > code {
  @apply bg-pastel-grey;
  @apply font-mono;
  @apply p-20;
  @apply leading-normal;
  @apply overflow-x-scroll;
  @apply block;
}
</style>
