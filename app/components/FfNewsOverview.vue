<!--
News homepage (blog overview)

TODO:
- Instead of showing all blog posts as cards, show only a subset and link to
  an archive or a way to load more posts.
- Highlight blog posts in various categories, e.g., ECL posts.
-->
<template>
  <!-- Latest (featured) blog post, shown large, if available -->
  <div v-if="featuredBlogPost" class="bg-pastel-grey">
    <FfContainer>
      <!-- Using the Content blocks/Image & text component. -->
      <div class="flex flex-col tablet:flex-row my-auto py-24 tablet:py-64">
        <div class="flex-auto">
          <FfH3>Latest news</FfH3>
          <NuxtLink :to="featuredBlogPost.path">
            <FfH2 :href="featuredBlogPost.path">{{ featuredBlogPost.title }}</FfH2>
            <p v-if="featuredBlogPost.excerpt">{{ featuredBlogPost.excerpt }}</p>
          </NuxtLink>
          <p>
            <FfLinkUnderline v-if="featuredBlogPost.path" :to="featuredBlogPost.path">Read more ...</FfLinkUnderline>
          </p>
        </div>
        <div class="flex-none max-w-[344px] order-first tablet:order-none">
          <NuxtLink :to="featuredBlogPost.path">
            <NuxtImg class="w-max" v-if="featuredBlogPost.coverImage" :src="featuredBlogPost.coverImage"/>
            <NuxtImg class="w-max" v-else src="/images/pattern-guardianship.png"/>
          </NuxtLink>
        </div>
      </div>
    </FfContainer>
  </div>

  <FfContainer>
    <!-- A selection of blog posts posts displayed as cards -->
    <FfCards>
      <FfBlogPostCard v-for="post in blogPosts" :post="post" />
    </FfCards>
  </FfContainer>
</template>

<script setup lang="ts">
const allPosts = await queryCollection('content')
  .where('path', 'LIKE', '/blog/%')
  .where('path', '<>', '/blog')
  .order('date', 'DESC')
  .select('title', 'excerpt', 'coverImage', 'path')
  .all()

// Designate the most recent blog post as "featured", remove it from the list
const featuredBlogPost = allPosts[0]
const blogPosts = allPosts.slice(1)
</script>
