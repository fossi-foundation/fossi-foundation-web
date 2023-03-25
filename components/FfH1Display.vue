<!--
Heading level 1 (extra large)

Display only on the homepage

Style guide references:
- Web components/Typography/Headings/display h1
- Web components/Typography/Smaller headings for phone view/display h1 phone
-->
<template>
  <h1 class="font-black text-phone-39 tablet:text-81 tracking-tighter leading-none mb-[19px] tablet:mb-[40px]">
    <slot />
  </h1>
</template>
