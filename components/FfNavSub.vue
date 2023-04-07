<!--
Sub-navigation

Used on section pages that contain child pages.

Style guide reference: Web components/Navigation/Sub-navigation

TODO:
- No mobile view implemented (or discussed in style guide). Depending on the
  amount of navigation items, the horizontal layout is sufficient or too small.
- Horizontal overflow (which is likely on mobile) breaks the layout by extending
  the page to the right.
- The logic to query the subpages is broken.
-->
<template>
  <nav class="py-20 font-black text-ultraviolet">
    <ContentNavigation v-slot="{ navigation }" :query="subpagesQuery">
      <ul class="flex flex-row space-x-16 px-0 mx-0">
        <li class="block" v-for="link of navigation[0].children">
          <FfLinkLarge :key="link._path" :to="link._path">
            {{ link.navTitle || link.title }}
          </FfLinkLarge>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>

<script setup lang="ts">
/* extract the basename (first sub-path and query content from there) */
const subpagesQuery = queryContent(useRoute().path.split("/")[1])
</script>
