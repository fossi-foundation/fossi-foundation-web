<!--
Section top

The section top presents a summary of the topic with a sub-navigation and
signposts to child pages in the section.

Use with the "full-width" layout only to have the colored boxes span the full
width of the screen.

Style guide references:
- Web components/Example web pages/Section top
-->
<template>
  <div class="group basis-1/2 overflow-hidden text-white p-32 desktop:p-64" :class="wrapperClass">
    <!-- 1600px/2 - 96px padding == 706px -->
    <div class="flex flex-col phone:flex-row
                space-x-16
                desktop:max-w-[706px]
                tablet:px-48
                px-24
                group-odd:ms-auto group-odd:me-0
                group-even:ms-0 group-even:me-auto
                group-odd:tablet:ps-48
                group-odd:desktop:ps-96
                group-even:tablet:pe-48
                group-even:desktop:pe-96">
      <div>
        <component :is="icons[icon]" class="text-[100px] mx-auto" />
      </div>
      <div>
        <FfH2 class="text-white">{{ title }}</FfH2>
        <FfParaLg>{{ description }}</FfParaLg>
        <FfParaLg v-if="linkTo" class="mt-16"><FfLinkUnderline class="text-white hover:text-white" :to="linkTo" :target="linkTarget" :title="linkTitle">{{ linkTitle }}</FfLinkUnderline></FfParaLg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// There is no easy way to import an icon based on a prop value. Provide a set
// of icons instead and let the user choose from those.
// See also https://github.com/antfu/unplugin-icons/issues/5.

import IconPhPolygon from '~icons/ph/polygon-bold'
import IconPhUsersThree from '~icons/ph/users-three-bold'
import IconPhShieldCheckered from '~icons/ph/shield-checkered-bold'
import IconPhGitPullRequest from '~icons/ph/git-pull-request-bold'

import type { FunctionalComponent, SVGAttributes } from 'vue'

interface IconMap {
  [key: string]: FunctionalComponent<SVGAttributes>
}

const icons: IconMap = {
  community: IconPhUsersThree,
  innovation: IconPhPolygon,
  guardianship: IconPhShieldCheckered,
  resources: IconPhGitPullRequest,
}

export interface Props {
  title: string
  description: string
  icon: string
  linkTo?: string
  linkTitle?: string
  linkTarget?: string
  color: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'resources',
  color: 'ultraviolet',
})

interface StringMapType {
  [key: string]: string
}

// Map the `color` prop to a list of CSS classes.
// Note: Explicitly spell out all class names instead of computing them to
// avoid PurgeCSS removing the classes from the resulting CSS.
const colorCssClassMap: StringMapType = {
  'ultraviolet': 'bg-ultraviolet',
  'nasu-purple': 'bg-nasu-purple',
  'fuchsia-flourish': 'bg-fuchsia-flourish',
  'pink-piano': 'bg-pink-piano',
}

const wrapperClass = computed(() => {
  return colorCssClassMap[props.color]
})
</script>
