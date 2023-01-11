<!--
Link to a social media site
-->
<template>
  <div class="flex space-x-20 justify-center" >
    <FfLinkUnderline :title="emailTitle" v-if="email" :to="emailLink">
      <span class="sr-only">Email</span>
      <IconFasEnvelope class="aria-hidden"/>
    </FfLinkUnderline>
    <FfLinkUnderline v-if="twitterUrl" title="Twitter" :to="twitterUrl" target="_blank">
      <span class="sr-only">Twitter</span>
      <IconFabTwitter class="aria-hidden" />
    </FfLinkUnderline>
    <FfLinkUnderline v-if="mastodonUrl" title="Mastodon" :to="mastodonUrl" target="_blank">
      <span class="sr-only">Mastodon</span>
      <IconFabMastodon class="aria-hidden" />
    </FfLinkUnderline>
    <FfLinkUnderline v-if="linkedInUrl" title="LinkedIn" :to="linkedInUrl" target="_blank">
      <span class="sr-only">LinkedIn</span>
      <IconFabLinkedinIn class="aria-hidden"/>
    </FfLinkUnderline>
    <FfLinkUnderline v-if="githubUrl" title="GitHub" :to="githubUrl" target="_blank">
      <span class="sr-only">GitHub</span>
      <IconFabGithub class="aria-hidden" />
    </FfLinkUnderline>
  </div>
</template>

<script setup lang="ts">
import IconFabLinkedinIn from '~icons/fa6-brands/linkedin-in'
import IconFabTwitter from '~icons/fa6-brands/x-twitter'
import IconFabMastodon from '~icons/fa6-brands/mastodon'
import IconFabGithub from '~icons/fa6-brands/github'
import IconFasEnvelope from '~icons/fa6-solid/envelope'

const props = defineProps<{
  twitterUrl?: string
  linkedInUrl?: string
  mastodonUrl?: string
  githubUrl?: string
  email?: string
}>()

const emailTitle = "Send an email to " + props.email;
const emailLink = "mailto:" + props.email;

</script>
