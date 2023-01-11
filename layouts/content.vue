<!--
Content layout

Use for content pages.

Style guide reference: Web components/Example web pages/Article
-->
<template>
  <div class="w-full">
    <FfHeader />
    <main>
      <FfContainer>
        <FfNavSub />
      </FfContainer>
      <FfHeaderText />
      <FfContainer>
        <slot />
      </FfContainer>
    </main>
    <FfFooter />
  </div>
</template>
