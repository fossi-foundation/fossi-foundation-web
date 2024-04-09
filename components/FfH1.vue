<!--
Heading level 1

Use for the page title only

Style guide references:
- Web components/Typography/Headings/h1
- Web components/Typography/Smaller headings for phone view/h1 phone
-->
<template>
  <h1 class="font-black text-phone-31 tablet:text-54 tracking-tighter leading-tighter mb-[15px] tablet:mb-[27px] max-w-prose text-balance" :id="id">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </h1>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>
