<!--
Full-width content layout with header.

Use for full-width content pages. Use the "default" layout if no header is
required.
-->
<template>
  <div class="w-full">
    <FfHeader />
    <main>
      <FfContainer>
        <FfNavSub />
      </FfContainer>
      <FfHeaderTextFrontmatter />
      <slot />
    </main>
    <FfFooter />
  </div>
</template>
