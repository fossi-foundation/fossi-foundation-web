<!--
Section top

The section top presents a summary of the topic with a sub-navigation and
signposts to child pages in the section.

Use nested <FfSectionTopItem> elements for the individual items.

Style guide references:
- Web components/Example web pages/Section top
-->
<template>
  <div class="flex flex-col desktop:flex-row flex-wrap mt-[4px] desktop:mt-0">
    <slot></slot>
  </div>
</template>
