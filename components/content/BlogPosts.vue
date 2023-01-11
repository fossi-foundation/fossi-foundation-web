<template>
  <ul>
    <li v-for="{ _path: slug, title } in blogPosts" :key="slug">
      <FfLink :to="slug">{{ title }}</FfLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const blogPosts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false })
  .find()
</script>
