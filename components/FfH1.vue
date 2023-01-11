<!--
Heading level 1

Use for the page title only

Style guide references:
- Web components/Typography/Headings/h1
- Web components/Typography/Smaller headings for phone view/h1 phone

TODO:
- Clarify leading w.r.t. the style guide (issue #3)
- The style guide says "Spacing between headings should be equal to the size of
  the heading font.". A bottom margin of 81px is massive and not actually used
  in the design templates. Most likely the advise only applies to h2 and lower?
-->
<template>
  <h1 class="font-black text-phone-31 tablet:text-54 tracking-tighter leading-none mb-20" :id="id">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </h1>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>
