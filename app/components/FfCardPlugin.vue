<!--
Signpost card

Use as a signpost to another page or post

Style guide reference: Web components/Cards/Signpost card
-->
<template>
  <NuxtLink class="bg-white">
    <div :to="linkTo" :title="linkTitle" :target="linkTarget">
      <FfH3 class="border-b-4 border-ultraviolet" >
        {{ headline }}
      </FfH3>
      <FfParaExcerpt v-if="subheading" class="mt-10">
        {{ subheading }}
      </FfParaExcerpt>
      <FfParaExcerpt class="text-warm-black mt-10">
        <slot></slot>
      </FfParaExcerpt>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
export interface Props {
  // Image
  img?: string
  // Make the header image cover the whole image area (unproportional scaling).
  imgObjectCover?: boolean

  headline: string
  subheading?: string

  // Link-related properties. No link is set if linkTo is undefined.
  linkTo?: string
  linkTitle?: string
  linkTarget?: string
}

withDefaults(defineProps<Props>(), {
  imgObjectCover: true
})
</script>
