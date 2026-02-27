<!--
Homepage
-->
<template>

  <!--
  News
  -->
  <div class="bg-pastel-grey">
    <FfContainer class="py-32 bg-pastel-grey">
      <FfH3 class="text-warm-black text-center mx-auto mb-32">
        Latest LibreLane News
      </FfH3>

      <FfCards>
        <FfBlogPostCard v-for="post in blogPosts" :post="post" />
      </FfCards>
    </FfContainer>
  </div>

</template>

<script setup>
// Get the three most recent blog posts
const blogPosts = await queryContent('/librelane/blog')
.sort({date: -1 }) // show latest articles first
.where({_partial: false })
.where({ _id: { $ne: 'content:librelane:blog:index.md' } }) // Filter out the blog overview page.
.limit(3)
.find()
</script>
