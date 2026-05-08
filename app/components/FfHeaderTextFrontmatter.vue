<!--
Populate FfHeaderText with information from a page's frontmatter.
-->
<template>
  <FfHeaderText :author="page?.author" :date="page?.date" :header="page?.header" :title="page?.title"/>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(`header-${route.path}`, () =>
  queryCollection('content').path(route.path).first()
)
</script>
