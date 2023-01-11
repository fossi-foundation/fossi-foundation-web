<template>
  <!--
  A vue catch-all route, used to render content pages.
  https://nuxt.com/docs/guide/directory-structure/pages/#catch-all-route
  -->
  <main>
    <ContentDoc>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>

<!-- or maybe like this?
https://github.com/nuxt/content/issues/1287
<ContentDoc :path="$route.path">
  <template v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <ContentRenderer :value="doc" />
  </template>
  <template #not-found> <h1>Document not found</h1> </template>
</ContentDoc>-->
