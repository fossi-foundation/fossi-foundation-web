<!--
Hero page header

Display only on the homepage

Style guide reference: Web components/Page headers/Hero
-->
<template>
  <div :style="backgroundStyles" class="bg-ultraviolet bg-cover text-white py-24 tablet:py-48 desktop:py-96">
    <FfContainer>
      <FfH1Display>Unleash the powers <br/>of open source to your chips</FfH1Display>
      <FfH2 class="max-w-[800px] text-white">
        The FOSSi Foundation is the custodian of the Free and Open Source Silicon movement.
      </FfH2>

      <FfBtnCta class="mt-32" inverted linkTo="/free-and-open-source-silicon">What is Free and Open Source Silicon?</FfBtnCta>
    </FfContainer>
  </div>
</template>

<script setup lang="ts">
// Serve the hero background image through Nuxt Image.
const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/images/hero-bg.jpg', {'format': 'webp'})
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>
