<!--
Card layout

A container for cards.

Style guide reference: Web components/Cards/Card layout
-->
<template>
  <div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-24 tablet:gap-32 py-24 tablet:py-48 desktop:py-64">
    <slot></slot>
  </div>
</template>
