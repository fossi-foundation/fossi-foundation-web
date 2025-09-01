<!--
Code sample (block)

Use for the page title only

Style guide references:
- Web components/Content blocks/Code samples

TODO:
- We use a light background for code blocks, not a black one as specified in the
  style guide to work around the inability to specify different code highlighter
  themes. See https://github.com/nuxt/content/issues/1995 for details.
-->
<template>
  <!-- Also update ProseCode.vue when making changes to the class here. -->
  <FfCode class="p-20 leading-normal bg-pastel-grey overflow-x-scroll">
    <slot :use="$slots.default" mdc-unwrap="p" />
  </FfCode>
</template>
