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
  <FfLink :href="href" :target="target">
    <slot />
  </FfLink>
</template>
