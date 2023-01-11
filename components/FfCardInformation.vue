<!--
Information card

Use to present chunks of short information such as a member profile or project
summary

The card image has to passed as HTML in a named slot due to Vite/Nuxt
limitations, which effectively prevent passing an image name as prop.
See https://github.com/nuxt/nuxt/issues/14766 for a discussion.

Style guide reference: Web components/Cards/Information card
-->
<template>
  <div class="max-w-[250px] mx-auto">
    <div class="relative mx-auto h-[155px] w-[155px]">
      <img :src="img" class="h-[155px] w-[155px] grayscale object-cover" />
      <div class="absolute z-10 top-0 left-0 w-full h-full bg-opacity-20 bg-ultraviolet"></div>
    </div>
    <div class="text-center">
      <FfH3 class="text-ultraviolet font-black">{{ headline }}</FfH3>
      <FfParaExcerpt v-if="subheading" class="mt-10 text-ultraviolet">
        {{ subheading }}
      </FfParaExcerpt>
      <FfParaExcerpt class="text-warm-black mt-10">
        <slot></slot>
      </FfParaExcerpt>
    </div>
  </div>
</template>


<script setup lang="ts">
export interface Props {
  // Image
  img?: string

  headline: string
  subheading?: string

  // Link-related properties. No link is set if linkTo is undefined.
  linkTo?: string
  linkTitle?: string
  linkTarget?: string
}

defineProps<Props>()
</script>
