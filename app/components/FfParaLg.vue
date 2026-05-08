<!--
Large paragraph

Use for shorter blocks of text

Style guide references:
- Web components/Typography/Paragraphs/large paragraph
- Web components/Typography/Paragraphs/large paragraph phone
-->
<template>
  <p class="text-phone-20 tablet:text-24 font-bold leading-tighter mb-[30px] tablet:mb-[36px] max-w-prose">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </p>
</template>
