<!--
Call-to-action button

TODO:
- Font scaling is implemented, but not specified in the style guide.
-->

<template>
  <NuxtLink class="inline-block w-full tablet:w-auto text-center font-black text-phone-20 tablet:text-24 px-20 py-10 rounded-tr-xl shadow-mid" :class="{ 'bg-ultraviolet': !inverted, 'bg-white': inverted, 'text-white': !inverted, 'text-ultraviolet': inverted }" :to="linkTo" :title="linkTitle" :target="linkTarget">
    <slot :use="$slots.default" mdc-unwrap="p" />
  </NuxtLink>
</template>

<script setup lang="ts">
export interface Props {
  // Invert the color scheme.
  inverted?: boolean

  linkTo: string,
  linkTitle?: string
  linkTarget?: string
}

withDefaults(defineProps<Props>(), {
  inverted: false
})
</script>
