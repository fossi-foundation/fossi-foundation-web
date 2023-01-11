<!--
Banner

* Banners are placed to disrupt the flow of content
* Use an image to draw reader attention that supports the key message
* Include a call-to-action button
* Use to draw attention to newly published content such as an event or project

Style guide references:
- Web components/Signposts/Banner
-->
<template>
  <div class="text-white bg-cover bg-center">
    <FfContainer class="py-24 tablet:py-48 desktop:py-96">
      <FfH2 class="text-white !mb-16">{{  title }}</FfH2>
      <FfH3 v-if="subtitle" class="text-white !mb-16 !mt-0">{{ subtitle }}</FfH3>
      <FfBtnCta inverted class="block w-full tablet:w-auto" :linkTo="ctaTo" :linkTitle="ctaLabel">{{ ctaLabel }}</FfBtnCta>
    </FfContainer>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string

  // Call-to-action button
  ctaLabel: string
  ctaTo: string
}>()
</script>
