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
          <a href="https://twitter.com/FossiFoundation" target="_blank" class="relative group transition-transform duration-300 hover:-translate-y-1">
            <IconFabTwitter class="text-24 hover:opacity-80" />
          </a>
          <a href="https://mastodon.social/@fossifoundation" target="_blank" class="relative group transition-transform duration-300 hover:-translate-y-1">
            <IconFabMastodon class="text-24 hover:opacity-80" />
          </a>
          <a href="https://www.linkedin.com/company/fossi-foundation/" target="_blank" class="relative group transition-transform duration-300 hover:-translate-y-1">
            <IconFabLinkedinIn class="text-24 hover:opacity-80" />
          </a>
          <a href="https://www.youtube.com/@FOSSiFoundation" target="_blank" class="relative group transition-transform duration-300 hover:-translate-y-1">
            <IconFabYoutube class="text-24 hover:opacity-80" />
          </a>
        </div>
        <ul class="desktop:order-1 flex flex-col mt-16 desktop:grow desktop:mt-0 space-y-20 desktop:flex-row desktop:space-y-0 desktop:space-x-16">
          <li>
            <NuxtLink to="/free-and-open-source-silicon" class="relative inline-block border-b-2 border-transparent hover:border-ultraviolet transition-all duration-300 hover:scale-105">
              <span>What is Open Silicon</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-us" class="relative inline-block border-b-2 border-transparent hover:border-ultraviolet transition-all duration-300 hover:scale-105">
              <span>Who we are</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/our-work" class="relative inline-block border-b-2 border-transparent hover:border-ultraviolet transition-all duration-300 hover:scale-105">
              <span>What we do</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events" class="relative inline-block border-b-2 border-transparent hover:border-ultraviolet transition-all duration-300 hover:scale-105">
              <span>Events</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/news" class="relative inline-block border-b-2 border-transparent hover:border-ultraviolet transition-all duration-300 hover:scale-105">
              <span>News</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/get-involved" class="relative inline-block border-b-2 border-transparent hover:border-ultraviolet transition-all duration-300 hover:scale-105">
              <span>Get involved</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="mt-24 flex flex-col space-y-10 desktop:space-y-0 desktop:flex-row">
        <div>
          <div class="mb-24 desktop:mb-10 flex flex-col desktop:grow space-y-20 desktop:flex-row desktop:space-y-0 desktop:space-x-16">
            <NuxtLink to="/contact" class="relative inline-block border-b-2 border-transparent hover:border-ultraviolet transition-all duration-300 hover:scale-105">
              <span>Contact and legal information</span>
            </NuxtLink>
            <a href="https://github.com/fossi-foundation/fossi-foundation-web" class="relative inline-block border-b-2 border-transparent hover:border-ultraviolet transition-all duration-300 hover:scale-105">
              <span>Contribute to this page on GitHub</span>
            </a>
          </div>
        </div>
        <div class="desktop:order-first desktop:mr-32">
          <NuxtLink to="/" class="transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105">
            <span class="sr-only">FOSSi Foundation home page</span>
            <NuxtImg class="w-[180px]" width="180" height="60" alt="FOSSi Foundation logo" src="/images/fossi-logo-full.svg" />
          </NuxtLink>
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
