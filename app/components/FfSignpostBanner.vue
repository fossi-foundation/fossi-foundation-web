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
      <!-- Apply the styling of FfH3, but to the <p> nodes below it. -->
      <div class="[&>p]:font-black [&>p]:white [&>p]:text-phone-20 [&>p]:tablet:text-24 [&>p]:tracking-tight [&>p]:leading-tighter [&>p]:text-white [&>p]:mt-[22px] [&>p]:mb-10 [&>p]:tablet:mt-24 [&>p]:tablet:mb-12 [&>p]:max-w-prose">
        <ContentSlot :use="$slots.default" />
      </div>
      <FfBtnCta v-if="ctaTo" inverted class="block w-full tablet:w-auto" :linkTo="ctaTo" :linkTitle="ctaLabel">{{ ctaLabel }}</FfBtnCta>
    </FfContainer>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string

  // Call-to-action button
  ctaLabel?: string
  ctaTo?: string
}>()
</script>
