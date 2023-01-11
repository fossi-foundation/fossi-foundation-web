<!--
link underline

Use for inline text links and footer links

Style guide references:
- Web components/Buttons and Links/Links/link underline
-->
<template>
  <NuxtLink class="text-ultraviolet hover:text-warm-black underline font-black" active-class="text-warm-black" :to="to" :title="title" :target="target">
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
