<!--
Heading level 2

Use for the page title only

Style guide references:
- Web components/Typography/Headings/h2
- Web components/Typography/Smaller headings for phone view/h2 phone
-->
<template>
  <h2 class="font-black text-phone-25 tablet:text-36 tracking-tight leading-tighter text-ultraviolet my-[22px] tablet:my-[18px] max-w-prose" :id="id">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>
