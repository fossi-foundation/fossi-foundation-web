<!--
Article layout

Use for long-form text articles.

Style guide reference: Web components/Example web pages/Article
-->
<template>
  <div class="w-full">
    <FfHeader />
    <main>
      <FfContainer>
        <FfNavSub />
      </FfContainer>
      <FfHeaderTextFrontmatter />
      <FfContainer>
        <article>
          <FfContentLong>
            <slot />
          </FfContentLong>
        </article>
      </FfContainer>
    </main>
    <FfFooter />
  </div>
</template>
