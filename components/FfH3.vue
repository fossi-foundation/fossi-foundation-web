<!--
Heading level 3

Use for the page title only

Style guide references:
- Web components/Typography/Headings/h3
- Web components/Typography/Smaller headings for phone view/h3 phone

TODO:
- Clarify leading w.r.t. the style guide (issue #3)
- Margins are undefined in style guide. Confirm that values are OK.
-->
<template>
  <h3 class="font-black text-phone-20 tablet:text-24 tracking-tight leading-tight text-ultraviolet mb-10 mt-20" :id="id">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>
