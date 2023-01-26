<template>
  <FfPageHeader>{{ page.header }}</FfPageHeader>
  <article class="desktop:container mx-auto prose">
    <slot />
  </article>
</template>

<script setup lang="ts">
const { page } = useContent();
</script>
