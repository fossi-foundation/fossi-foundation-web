<!--
Page footer

This is displayed at the bottom of every webpage. It contains a summary of
website navigation, social links, contact and important legal information.

Style guide reference: Web components/PageFooter
-->
<template>
  <FfContainer>
    <footer class="py-64 font-bold text-ultraviolet">
      <div class="flex flex-row justify-center ml-4"> <!-- Applied small left margin -->
        <!-- Logo on the left side spanning all rows -->
        <div class="mr-32 self-start">
          <a href="/" class="hover:text-black transition-colors">
            <span class="sr-only">FOSSi Foundation home page</span>
            <NuxtImg class="w-[180px]" width="180" height="60" alt="FOSSi Foundation logo" src="/images/fossi-logo-full.svg" />
          </a>
        </div>
        
        <!-- Content on the right side with slight leftward shift -->
        <div class="flex flex-col flex-grow items-center">
          <!-- Row 1: Navigation Menu -->
          <ul class="flex flex-wrap justify-center gap-x-16 gap-y-20 mb-32 w-full">
            <li class="flex justify-center">
              <a href="/free-and-open-source-silicon" class="hover:text-black transition-colors">What is Open Silicon</a>
            </li>
            <li class="flex justify-center">
              <a href="/about-us" class="hover:text-black transition-colors">Who we are</a>
            </li>
            <li class="flex justify-center">
              <a href="/our-work" class="hover:text-black transition-colors">What we do</a>
            </li>
            <li class="flex justify-center">
              <a href="/events" class="hover:text-black transition-colors">Events</a>
            </li>
            <li class="flex justify-center">
              <a href="/news" class="hover:text-black transition-colors">News</a>
            </li>
            <li class="flex justify-center">
              <a href="/get-involved" class="hover:text-black transition-colors">Get involved</a>
            </li>
          </ul>
          
          <!-- Row 2: Legal Links -->
          <div class="flex flex-wrap justify-center gap-x-16 gap-y-20 mb-32 w-full">
            <a href="/contact" class="hover:text-black transition-colors">Contact and legal information</a>
            <a href="https://github.com/fossi-foundation/fossi-foundation-web" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors">Contribute to this page on GitHub</a>
          </div>
          
          <!-- Row 3: Follow Us with Social Icons -->
          <div class="flex flex-col items-center w-full">
            <div class="mb-16">Follow us</div>
            <div class="flex justify-center space-x-20">
              <a href="https://twitter.com/FossiFoundation" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors">
                <IconFabTwitter class="text-24" />
              </a>
              <a href="https://mastodon.social/@fossifoundation" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors">
                <IconFabMastodon class="text-24" />
              </a>
              <a href="https://www.linkedin.com/company/fossi-foundation/" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors">
                <IconFabLinkedinIn class="text-24" />
              </a>
              <a href="https://www.youtube.com/@FOSSiFoundation" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors">
                <IconFabYoutube class="text-24" />
              </a>
            </div>
          </div>
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
