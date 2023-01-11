<!--
Text-only page header

Display on the majority of webpages

Style guide reference: Web components/Page headers/Text only

TODO:
- Option to add date (for blog posts) is missing.
- Make different slots or attributes available.
- Should we have the corner mark in the background within the container, our
  at the page border?
-->
<template>
  <div class="text-white py-64 bg-ultraviolet bg-corner-reducedmark-nasu-purple bg-contain bg-right-bottom bg-no-repeat ">
    <FfContainer>
      <FfH1 class="!mb-0">{{ page?.title }}</FfH1>
      <FfParaLg v-if="page?.header" class="max-w-2xl mb-0 mt-32">
        {{  page?.header  }}
      </FfParaLg>
    </FfContainer>
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
</script>
