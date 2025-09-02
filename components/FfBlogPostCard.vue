<!--
Signpost Card summarizing a single post
-->
<template>
  <FfCardSignpost :key="post.path" :headline="post.title" :linkTo="post.path" :img="post.coverImage">
    <ContentRenderer :value="post" :excerpt="true" />
  </FfCardSignpost>
</template>

<script setup lang="ts">
export interface Post {
  title: string
  path: string
  coverImage?: string
}

defineProps<{
  post: Post
}>()
</script>
