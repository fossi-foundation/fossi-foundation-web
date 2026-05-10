<!--
Populate FfHeaderText with information from a page's frontmatter.
-->
<template>
  <FfHeaderText :author="page?.author" :date="page?.date" :header="page?.header" :title="page?.title"/>
</template>

<script setup lang="ts">
const route = useRoute()
// Read the page payload already fetched by [...slug].vue (key: route.path).
const { data: page } = useNuxtData(route.path)
</script>
