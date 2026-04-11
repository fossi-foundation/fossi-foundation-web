<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, async () => {
  return await queryCollection('pages').path(route.path).first()
    ?? await queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
