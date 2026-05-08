<!--
Sub-navigation

Used on section pages that contain child pages.

Style guide reference: Web components/Navigation/Sub-navigation
-->
<template>
  <nav class="py-20 font-black text-ultraviolet" v-if="hasSubpages">
    <ul class="flex flex-row flex-wrap gap-16 px-0 mx-0">
      <li class="block" v-for="link of categoryNav?.children">
        <FfLinkLarge :key="link.path" :to="link.path">
          {{ link.navTitle || link.title }}
        </FfLinkLarge>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const category = useRoute().path.split("/")[1]

const { data: navigation } = await useAsyncData(`nav-${category}`, () =>
  queryCollectionNavigation('content')
)

const categoryNav = computed<ContentNavigationItem | undefined>(() =>
  navigation.value?.find((n: ContentNavigationItem) => n.path === `/${category}`)
)

const hasSubpages = computed(() => (categoryNav.value?.children?.length ?? 0) > 0)
</script>
