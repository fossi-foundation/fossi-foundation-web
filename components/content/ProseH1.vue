<template>
  <FfH1 :id="id">
    <a v-if="id && generate" :href="`#${id}`" class="text-inherit no-underline">
      <slot />
    </a>
    <slot v-else />
  </FfH1>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id?: string }>()
const heading = 1
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
