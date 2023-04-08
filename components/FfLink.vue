<!--
link

Use for heading links for the phone view and for alerts

Style guide references:
- Web components/Buttons and Links/Links/link
-->
<template>
  <NuxtLink class="text-ultraviolet hover:text-warm-black font-black" active-class="text-warm-black" :to="to" :title="title" :target="target">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  target: {
    type: String,
    required: false,
  },
});
</script>
