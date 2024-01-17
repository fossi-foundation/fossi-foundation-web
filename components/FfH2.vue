<!--
Heading level 2

Style guide references:
- Web components/Typography/Headings/h2
- Web components/Typography/Smaller headings for phone view/h2 phone
-->
<template>
  <h2 class="font-black text-phone-25 tablet:text-36 tracking-tight leading-tighter text-ultraviolet pt-[34px] pb-[22px] tablet:pb-[18px] tablet:pt-[30px] max-w-prose" :id="id">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>
