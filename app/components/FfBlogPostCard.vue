<!--
Signpost Card summarizing a single post
-->
<template>
  <FfCardSignpost :key="post._path" :headline="post.title" :linkTo="post._path" :img="post.coverImage">
    <ContentRendererMarkdown :value="post" :excerpt="true" />
  </FfCardSignpost>
</template>

<script setup lang="ts">
export interface Post {
  title: string
  _path: string
  coverImage?: string
}

defineProps<{
  post: Post
}>()
</script>
