<!--
Call-to-action button

TODO:
- Font scaling is implemented, but not specified in the style guide.
-->

<template>
  <button class="font-black text-phone-20 tablet:text-24 px-20 py-10 rounded-tr-xl shadow-mid" :class="{'bg-ultraviolet': !inverted, 'bg-white': inverted, 'text-white': !inverted, 'text-ultraviolet': inverted}"><slot></slot></button>
</template>

<script setup>
defineProps({inverted: Boolean})
</script>
