<!--
link large

Use for heading links on desktop such as cards and important messages. Also use
for navigation bar links.

Style guide references:
- Web components/Buttons and Links/Links/link large
-->
<template>
  <NuxtLink class="text-ultraviolet hover:text-warm-black font-black text-20" active-class="text-warm-black" :to="to" :title="title" :target="target">
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
