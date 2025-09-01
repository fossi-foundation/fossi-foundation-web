<!--
Sub-navigation

Used on section pages that contain child pages.

Style guide reference: Web components/Navigation/Sub-navigation
-->
<template>
  <nav class="py-20 font-black text-ultraviolet" v-if="subpages">
    <ul class="flex flex-row flex-wrap gap-16 px-0 mx-0">
      <li class="block" v-for="link in subpages">
        <FfLinkLarge :key="link.path" :to="link.path">
          {{ link.title }}
        </FfLinkLarge>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { findPageChildren } from '@nuxt/content/utils'

const { data: navigation } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('pages')
})
const toplevelPath = "/" + useRoute().path.split("/")[1]
const subpages = navigation.value != null ? findPageChildren(navigation.value, toplevelPath, {indexAsChild: true}) : undefined
</script>
