<!--
Large paragraph

Use for shorter blocks of text

Style guide references:
- Web components/Typography/Paragraphs/large paragraph

TODO:
- Large paragraphs appear next to headings (such as h2 and h3). Headings scale
  their font size, but the large paragraph doesn't -- this makes a h3 followed
  by a large paragraph look out of proportion on phone/tablet views. We
  currently are choosing a smaller font from the 1.25x-scale for the phone view.
  Update the style guide if that's correct.
-->
<template>
  <p class="text-phone-20 tablet:text-24 font-bold leading-tighter mb-[30px] tablet:mb-[36px] max-w-prose">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </p>
</template>
