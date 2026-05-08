<!--
Blog post layout

Use for blog posts.

Style guide reference: Web components/Example web pages/News post with related content
-->
<template>
  <div class="w-full">
    <FfHeader />
    <main>
      <FfHeaderTextFrontmatter />
      <FfContainer>
        <article>
          <FfContentLong class="mt-16">
            <slot />
          </FfContentLong>
        </article>
      </FfContainer>
    </main>
    <FfFooter />
  </div>
</template>
