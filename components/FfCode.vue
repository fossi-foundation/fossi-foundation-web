<!--
(Inline) code

Style guide references:
- Web components/Typography/Code

TODO:
- The style guide specifies a 20px font size for code, which looks odd for
  inline code blocks (the text around it is 16px). Deviate from the style guide
  and use the same font size.
-->
<template>
  <code class="font-mono">
    <slot :use="$slots.default" mdc-unwrap="p" />
  </code>
</template>
