<script lang="ts" setup>
// Get the rendered page to extract the layout defined in the frontmatter.
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('pages').path(route.path).first()
})
</script>

<template>
  <NuxtLayout :name="page.layout || 'article'" v-if="page">
      <NuxtPage />
  </NuxtLayout>
</template>
