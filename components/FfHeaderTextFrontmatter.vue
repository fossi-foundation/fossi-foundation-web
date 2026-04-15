<!--
Populate FfHeaderText with information from a page's frontmatter.
-->
<template>
  <FfHeaderText v-if="page" :author="(page as any).author" :date="(page as any).date" :header="(page as any).header" :title="page.title"/>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, async () => {
  return await queryCollection('pages').path(route.path).first()
    ?? await queryCollection('blog').path(route.path).first()
})
</script>
