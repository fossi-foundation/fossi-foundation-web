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
const {data: blogPosts} = await useAsyncData('librelaneNews', () => {
  return queryCollection('pages')
    .path('/librelane/blog')
    .order('date', 'DESC')
    .limit(3)
    .all()
})
</script>
