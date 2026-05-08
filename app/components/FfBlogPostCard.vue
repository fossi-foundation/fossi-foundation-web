<!--
Signpost Card summarizing a single post
-->
<template>
  <FfCardSignpost :key="post.path" :headline="post.title" :linkTo="post.path" :img="post.coverImage">
    <p v-if="post.excerpt">{{ post.excerpt }}</p>
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
