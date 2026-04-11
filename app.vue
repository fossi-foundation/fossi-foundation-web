<script lang="ts" setup>
// Get the rendered page to extract the layout defined in the frontmatter.
// Try 'pages' first, fall back to 'blog' for blog post routes.
const route = useRoute()
const { data: page } = await useAsyncData(route.path, async () => {
  return await queryCollection('pages').path(route.path).first()
    ?? await queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <NuxtLayout :name="page?.layout || 'article'" v-if="page">
      <NuxtPage />
  </NuxtLayout>
</template>
