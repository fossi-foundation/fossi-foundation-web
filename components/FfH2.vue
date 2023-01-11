<!--
Heading level 2

Use for the page title only

Style guide references:
- Web components/Typography/Headings/h2
- Web components/Typography/Smaller headings for phone view/h2 phone

TODO:
- Clarify leading w.r.t. the style guide (issue #3)
- Margins are undefined in style guide. Confirm that values are OK.
-->
<template>
  <h2 class="font-black text-phone-25 tablet:text-36 tracking-tight leading-tight text-ultraviolet mb-10 mt-20" :id="id">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>
