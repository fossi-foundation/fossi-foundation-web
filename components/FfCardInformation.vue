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
  <div>
    <div class="[&>img]:h-[155px] [&>img]:w-[155px] [&>img]:object-cover">
      <div class="bg-neon w-100 h-100vh"></div>
      <!--<slot name="img"/>-->
      <img :src="imgstr"/>
    </div>
    <div class="text-center">
      <FfH3 class="text-ultraviolet font-black">{{ headline }}</FfH3>
      <FfParaExcerpt v-if="subheading" class="mt-10 text-ultraviolet">
        {{ subheading }}
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
  headline: {
    type: String,
    default: '',
  },
  subheading: {
    type: String,
    default: '',
  },
  imgstr: {
    type: String,
    default: '',
  },
})
</script>
