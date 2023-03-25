<!--
Paragraph

Use for longform text

Style guide references:
- Web components/Typography/Paragraphs/paragraph
-->
<template>
  <p class="text-16 font-normal leading-normal mb-24 max-w-prose">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </p>
</template>
