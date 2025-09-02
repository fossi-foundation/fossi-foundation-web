<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('pages').path(route.path).first()
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
