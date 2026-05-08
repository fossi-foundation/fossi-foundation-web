<!--
Populate FfHeaderText with information from a page's frontmatter.
-->
<template>
  <FfHeaderText :author="page?.author" :date="page?.date" :header="page?.header" :title="page?.title"/>
</template>

<script setup lang="ts">
const { page } = useContent();
</script>
