<!--
Heading level 3

Use for the page title only

Style guide references:
- Web components/Typography/Headings/h3
- Web components/Typography/Smaller headings for phone view/h3 phone
-->
<template>
  <h3 class="font-black text-phone-20 tablet:text-24 tracking-tight leading-tighter text-ultraviolet mt-[22px] mb-10 tablet:mt-24 tablet:mb-12 max-w-prose" :id="id">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>
