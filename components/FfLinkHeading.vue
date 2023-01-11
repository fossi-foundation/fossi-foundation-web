<!--
link heading

Heading links are used for cards and important links with a thicker
border-bottom.

Style guide references:
- Web components/Buttons and Links/Links/link heading
-->
<template>
  <NuxtLink class="text-ultraviolet font-black text-16 tablet:text-24 border-b-4 border-b-ultraviolet block leading-tighter hover:text-warm-black hover:border-b-transparent" active-class="text-warm-black" :to="to" :title="title" :target="target">
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  title?: string
  target?: string
}>();
</script>
