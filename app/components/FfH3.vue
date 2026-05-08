<!--
Heading level 3

Style guide references:
- Web components/Typography/Headings/h3
- Web components/Typography/Smaller headings for phone view/h3 phone
-->
<template>
  <h3 class="font-black text-phone-20 tablet:text-24 tracking-tight leading-tighter text-ultraviolet pt-[22px] pb-10 tablet:pt-24 tablet:pb-12 max-w-prose text-balance" :id="id">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>
