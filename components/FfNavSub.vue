<!--
Sub-navigation

Used on section pages that contain child pages.

Style guide reference: Web components/Navigation/Sub-navigation
-->
<template>
  <nav class="py-20 font-black text-ultraviolet" v-if="hasSubpages">
    <ContentNavigation v-slot="{ navigation }" :query="subpagesQuery">
      <ul class="flex flex-row flex-wrap gap-16 px-0 mx-0">
        <li class="group transition-all duration-300 ease-in-out" v-for="link of navigation[0].children">
          <FfLinkLarge 
            :key="link._path" 
            :to="link._path"
            class="block relative transition-all duration-300 hover:text-primary after:absolute after:bottom-0 after:block after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100"
          >
            {{ link.navTitle || link.title }}
          </FfLinkLarge>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>

<script setup lang="ts">
// Extract the first path segment and use it as "category".
const category = useRoute().path.split("/")[1]
const subpagesQuery = queryContent(category)

// A category has at least one page: the index page. Show the subnavigation only
// if there are more pages than the index page.
// TODO: Switch to .count() once we update to Nuxt Content 2.8
// const hasSubpages = (await queryContent(category).count()) > 1
const hasSubpages = ((await queryContent(category).find()).length ?? 0) > 1
</script>
