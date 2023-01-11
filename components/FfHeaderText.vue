<!--
Text-only page header

Display on the majority of webpages

Style guide reference: Web components/Page headers/Text only

TODO:
- Should we have the corner mark in the background within the container, our
  at the page border?
-->
<template>
  <div class="text-white py-64 bg-ultraviolet bg-corner-reducedmark-nasu-purple bg-contain bg-right-bottom bg-no-repeat">
    <FfContainer>
      <FfH1 class="!mb-0">{{ title }}</FfH1>
      <FfParaLg v-if="header" class="max-w-2xl mb-0 mt-32">
        {{ header }}
      </FfParaLg>
      <FfParaLg v-if="showByline" class="font-bold">
        <span v-if="author">by {{ author }}</span>
        <span v-if="date"> on {{ dateFormatted }}</span>
      </FfParaLg>
    </FfContainer>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  author?: string
  date?: string
  header?: string
}>()

const dateFormatted = computed(() => {
  if (!props.date) {
    return undefined
  } else {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(props.date))
  }
})

const showByline = computed(() => { return props.date || props.author });
</script>
