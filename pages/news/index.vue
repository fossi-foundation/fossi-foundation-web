<!--
News homepage (blog overview)

TODO:
- Instead of showing all blog posts as cards, show only a subset and link to
  an archive or a way to load more posts.
- Highlight blog posts in various categories, e.g., ECL posts.
-->
<template>
  <!--
    Explicitly add NuxtLayout/@name to work around a content flash when
    navigating between pages with different layouts.
    https://github.com/nuxt/nuxt/issues/14467
  -->
  <NuxtLayout name="default">
    <FfHeaderText title="News from the FOSSi Foundation"/>
    <!-- Latest (featured) blog post, shown large, if available -->
    <div v-if="featuredBlogPost" class="bg-pastel-grey">
      <FfContainer>
        <ContentRenderer :value="featuredBlogPost" :excerpt="true">
          <!-- Using the Content blocks/Image & text component. -->
          <div class="flex flex-col tablet:flex-row my-auto py-24 tablet:py-64">
            <div class="flex-auto">
              <NuxtLink :to="featuredBlogPost._path">
                <FfH2 :href="featuredBlogPost._path">{{ featuredBlogPost.title }}</FfH2>
                <ContentRendererMarkdown :value="featuredBlogPost" :excerpt="true" />

                <FfLinkUnderline v-if="featuredBlogPost._path" :to="featuredBlogPost._path">Read more ...</FfLinkUnderline>
              </NuxtLink>
            </div>
            <div class="flex-none max-w-[344px] order-first tablet:order-none">
              <NuxtLink :to="featuredBlogPost._path">
                <img class="w-max" v-if="featuredBlogPost.coverImage" :src="featuredBlogPost.coverImage"/>
                <img class="w-max" v-else src="~/assets/images/pattern-guardianship.png"/>
              </NuxtLink>
            </div>
          </div>
        </ContentRenderer>
      </FfContainer>
    </div>

    <FfContainer>
      <!-- A selection of blog posts posts displayed as cards -->
      <FfCards>
        <FfBlogPostCard v-for="post in blogPosts" :post="post" />
      </FfCards>
    </FfContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
// Get all blog posts.
const blogPosts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false })
  .where({ _id: { $ne: 'content:blog:index.md' } }) // Filter out this page.
  .only(["title", "excerpt", "coverImage", "_path"])
  .find()

// Designate the most recent blog post as "featured", remove it from the list
// of posts.
const featuredBlogPost = blogPosts.shift()

</script>
