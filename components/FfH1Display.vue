<!--
Heading level 1 (extra large)

Display only on the homepage

Style guide references:
- Web components/Typography/Headings/display h1
- Web components/Typography/Smaller headings for phone view/display h1 phone

TODO:
- Clarify leading w.r.t. the style guide (issue #3)
- The style guide says "Spacing between headings should be equal to the size of
  the heading font.". A bottom margin of 81px is massive and not actually used
  in the design templates. Most likely the advise only applies to h2 and lower?
-->
<template>
  <h1 class="font-black text-phone-39 tablet:text-81 tracking-tighter leading-none mb-32">
    <slot />
  </h1>
</template>
