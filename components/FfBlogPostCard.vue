<!--
Signpost Card summarizing a single post
-->
<template>
  <FfCardSignpost :key="post.path" :headline="post.title" :linkTo="post.path" :img="post.coverImage">
    {{ post.description }}
  </FfCardSignpost>
</template>

<script setup lang="ts">
export interface Post {
  title: string
  path: string
  description?: string
  coverImage?: string
}

defineProps<{
  post: Post
}>()
</script>
