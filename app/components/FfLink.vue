<!--
link

Use for heading links for the phone view and for alerts

Style guide references:
- Web components/Buttons and Links/Links/link
-->
<template>
  <NuxtLink class="text-ultraviolet hover:text-warm-black font-black" active-class="text-warm-black" :to="to" :title="title" :target="target">
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
