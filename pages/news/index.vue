
<template>
  <!--
    Explicitly add NuxtLayout/@name to work around a content flash when
    navigating between pages with different layouts.
    https://github.com/nuxt/nuxt/issues/14467
  -->
  <NuxtLayout name="default">
    <FfHeaderText title="News from the FOSSi Foundation"/>
    <FfContainer>
      <!-- Latest (featured) blog post, shown large, if available -->
      <ContentRenderer v-if="featuredBlogPost" :value="featuredBlogPost" :excerpt="true">
        <!-- Using the Content blocks/Image & text component. -->
        <div class="flex my-auto bg-pastel-grey px-96 py-64 mt-64">
          <div class="flex-auto">
            <NuxtLink :to="featuredBlogPost._path">
              <FfH2 :href="featuredBlogPost._path">{{ featuredBlogPost.title }}</FfH2>
              <ContentRendererMarkdown :value="featuredBlogPost" :excerpt="true" />

              <FfLinkUnderline v-if="featuredBlogPost._path" :to="featuredBlogPost._path">Read more ...</FfLinkUnderline>
            </NuxtLink>
          </div>
          <div class="flex-none max-w-[344px]">
            <NuxtLink :to="featuredBlogPost?._path">
              <img class="w-max" v-if="featuredBlogPost.coverImage" :src="featuredBlogPost.coverImage"/>
              <img class="w-max" v-else src="~/assets/images/pattern-guardianship.png"/>
            </NuxtLink>
          </div>
        </div>
      </ContentRenderer>

      <!-- The last 9 blog posts displayed as cards -->
      <FfCards class="mt-64">
        <FfCardSignpost v-for="post in blogPosts" :key="post._path" :headline="post.title" :href="post._path">
          <template #img>
            <NuxtLink :to="post._path">
              <img class="w-max" v-if="post.coverImage" :src="post.coverImage"/>
              <img class="w-max" v-else src="~/assets/images/pattern-guardianship.png"/>
            </NuxtLink>
          </template>
          <NuxtLink :to="post._path">
            <ContentRendererMarkdown :value="post" :excerpt="true" />
          </NuxtLink>
        </FfCardSignpost>
      </FfCards>
    </FfContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
// Select the featured blog post to show at the top of the page in large.
const { data: featuredBlogPost } = await useAsyncData('page-data', () => queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false })
  .where({ _id: { $ne: 'content:blog:index.md' } }) // Filter out this overview page.
  .findOne()
)

// The latest 9 blog posts shown on this page.
const blogPosts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false })
  .where({ _id: { $ne: 'content:blog:index.md' } }) // Filter out this page.
  .limit(9)
  .find()

</script>
