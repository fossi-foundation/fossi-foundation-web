<!--
Populate FfHeaderText with information from a page's frontmatter.
-->
<template>
  <FfHeaderText v-if="page" :author="page.author" :date="page.date" :header="page.header" :title="page.title"/>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('pages').path(route.path).first()
})
</script>
