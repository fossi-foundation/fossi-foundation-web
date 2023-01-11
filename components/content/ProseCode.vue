<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
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
  }
})
</script>

<template>
  <slot />
</template>

<style>
/* We cannot use FfCodeBlock here, but keep the styling in sync with it. */
@tailwind base;
@tailwind components;
@tailwind utilities;

pre {
  @apply font-mono;
  @apply p-20;
  @apply leading-normal;
  @apply bg-pastel-grey;
  @apply overflow-x-scroll;
}
</style>
