<!--
Signpost card

Use as a signpost to another page or post

The card image has to passed as HTML in a named slot due to Vite/Nuxt
limitations, which effectively prevent passing an image name as prop.
See https://github.com/nuxt/nuxt/issues/14766 for a discussion.

Style guide reference: Web components/Cards/Signpost card
-->
<template>
  <div class="shadow-mid hover:shadow-low bg-white">
    <div class="[&>img]:h-[192px] [&>img]:w-full [&>img]:object-cover"><slot name="img"/></div>
    <div class="p-24">
      <FfH3 class="border-b-4 border-ultraviolet">
        <a :href="href" class="text-ultraviolet font-black">{{ headline }}</a>
      </FfH3>
      <FfParaExcerpt v-if="date" class="mt-10">
        {{ date }}
      </FfParaExcerpt>
      <FfParaExcerpt class="text-warm-black mt-10">
        <slot />
      </FfParaExcerpt>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: undefined,
    required: false
  },
  headline: {
    type: String,
    default: '',
  },
})
</script>
