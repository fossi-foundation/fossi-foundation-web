<!--
Signpost card

Use as a signpost to another page or post

Style guide reference: Web components/Cards/Signpost card
-->
<template>
  <NuxtLink :to="linkTo" :title="linkTitle" :target="linkTarget" class="shadow-mid hover:shadow-low bg-white">
    <div >
      <NuxtPicture v-if="img" :src="img" height="192" width="500" class="h-[192px] w-full" :class="{ 'object-cover': imgObjectCover, 'object-contain p-10': !imgObjectCover }"/>
      <NuxtPicture v-else height="192" width="500" class="h-[192px] w-full object-cover" src="/images/pattern-guardianship.png" alt="Pattern: guardianship" />
    </div>
    <div class="p-24">
      <FfH3 class="border-b-4 border-ultraviolet">
        <NuxtLink :to="linkTo" :title="linkTitle" :target="linkTarget" class="text-ultraviolet font-black">{{ headline }}</NuxtLink>
      </FfH3>
      <FfParaExcerpt v-if="subheading" class="mt-10">
        {{ subheading }}
      </FfParaExcerpt>
      <FfParaExcerpt class="text-warm-black mt-10">
        <NuxtLink :to="linkTo" :title="linkTitle" :target="linkTarget">
          <slot></slot>
        </NuxtLink>
      </FfParaExcerpt>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
export interface Props {
  // Image
  img?: string
  // Make the header image cover the whole image area (unproportional scaling).
  imgObjectCover?: boolean

  headline: string
  subheading?: string

  // Link-related properties. No link is set if linkTo is undefined.
  linkTo?: string
  linkTitle?: string
  linkTarget?: string
}

withDefaults(defineProps<Props>(), {
  imgObjectCover: true
})
</script>
