<!--
Signpost Card summarizing a single post
-->
<template>
  <FfCardSignpost :key="post.path" :headline="post.title" :linkTo="post.path" :img="post.coverImage">
    <template v-if="post.excerpt">{{ post.excerpt }}</template>
  </FfCardSignpost>
</template>

<script setup lang="ts">
export interface Post {
  title: string
  path: string
  coverImage?: string
  excerpt?: string
}

defineProps<{
  post: Post
}>()
</script>
