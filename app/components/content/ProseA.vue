<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})
</script>

<template>
  <FfLinkUnderline :to="href" :target="target">
    <slot />
  </FfLinkUnderline>
</template>
