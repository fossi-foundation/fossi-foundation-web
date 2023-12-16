<!--
Page footer

This is displayed at the bottom of every webpage. It contains a summary of
website navigation, social links, contact and important legal information.

Style guide reference: Web components/PageFooter
-->
<template>
  <FfContainer>
    <footer class="py-64 font-bold text-ultraviolet">
      <div class="flex w-full desktop:items-center desktop:space-x-10 desktop:flex desktop:w-auto flex-col desktop:flex-row">
        <div class="desktop:order-2">Follow us</div>
        <div class="desktop:order-3 flex space-x-20 my-20 desktop:my-0">
          <FfLinkUnderline to="https://twitter.com/FossiFoundation" target="_blank">
            <IconFabTwitter class="text-24" />
          </FfLinkUnderline>
          <FfLinkUnderline to="https://mastodon.social/@fossifoundation" target="_blank">
            <IconFabMastodon class="text-24" />
          </FfLinkUnderline>
          <FfLinkUnderline to="https://www.linkedin.com/company/fossi-foundation/" target="_blank">
            <IconFabLinkedinIn class="text-24" />
          </FfLinkUnderline>
          <FfLinkUnderline to="https://www.youtube.com/@FOSSiFoundation" target="_blank">
            <IconFabYoutube class="text-24" />
          </FfLinkUnderline>
        </div>
        <ul class="desktop:order-1 flex flex-col mt-16 desktop:grow desktop:mt-0 space-y-20 desktop:flex-row desktop:space-y-0 desktop:space-x-16">
          <li>
            <FfLinkUnderline to="/free-and-open-source-silicon">What is Open Silicon</FfLinkUnderline>
          </li>
          <li>
            <FfLinkUnderline to="/about-us">Who we are</FfLinkUnderline>
          </li>
          <li>
            <FfLinkUnderline to="/our-work">What we do</FfLinkUnderline>
          </li>
          <li>
            <FfLinkUnderline to="/events">Events</FfLinkUnderline>
          </li>
          <li>
            <FfLinkUnderline to="/news">News</FfLinkUnderline>
          </li>
          <li>
            <FfLinkUnderline to="/get-involved">Get involved</FfLinkUnderline>
          </li>
        </ul>
      </div>

      <div class="mt-24 flex flex-col space-y-10 desktop:space-y-0 desktop:flex-row">
        <div>
          <div class="mb-24 desktop:mb-10 flex flex-col desktop:grow space-y-20 desktop:flex-row desktop:space-y-0 desktop:space-x-16 ">
            <FfLinkUnderline to="/contact">Contact and legal information</FfLinkUnderline>
            <FfLinkUnderline to="https://github.com/fossi-foundation/fossi-foundation-web">Contribute to this page on GitHub</FfLinkUnderline>
          </div>
        </div>
        <div class="desktop:order-first desktop:mr-32">
          <FfLinkUnderline to="/">
            <span class="sr-only">FOSSi Foundation home page</span>
            <NuxtImg class="w-[180px]" width="180" src="/images/fossi-logo-full.svg" />
          </FfLinkUnderline>
        </div>
      </div>
    </footer>
  </FfContainer>
</template>

<script setup lang="ts">
import IconFabLinkedinIn from '~icons/fa6-brands/linkedin-in'
import IconFabTwitter from '~icons/fa6-brands/x-twitter'
import IconFabMastodon from '~icons/fa6-brands/mastodon'
import IconFabYoutube from '~icons/fa6-brands/youtube'
</script>
