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
        <div class="desktop:order-2">Follow @FossiFoundation</div>
        <div class="desktop:order-3 flex space-x-20 my-20 desktop:my-0">
          <FfLink to="https://twitter.com/FossiFoundation">
            <IconFabTwitter title="Twitter" class="text-36" />
          </FfLink>
          <FfLink to="https://mastodon.social/@fossifoundation">
            <IconFabMastodon title="Mastodon" class="text-36" />
          </FfLink>
          <FfLink to="https://www.linkedin.com/company/fossi-foundation/">
            <IconFabLinkedinIn title="LinkedIn" class="text-36" />
          </FfLink>
        </div>
        <ul class="desktop:order-1 flex flex-col mt-16 desktop:grow desktop:mt-0 space-y-20 desktop:flex-row desktop:space-y-0 desktop:space-x-16 underline">
          <li>
            <FfLink to="/free-and-open-silicon">What is Open Silicon</FfLink>
          </li>
          <li>
            <FfLink to="/about-us">Who we are</FfLink>
          </li>
          <li>
            <FfLink to="/our-work">What we do</FfLink>
          </li>
          <li>
            <FfLink to="/news">News</FfLink>
          </li>
          <li>
            <FfLink to="/get-involved">Get involved</FfLink>
          </li>
          <li>
            <FfLink to="/contact">Contact</FfLink>
          </li>
        </ul>
      </div>

      <div class="mt-24 flex flex-col space-y-10 desktop:space-y-0 desktop:flex-row">
        <div>
          <FfParaExcerpt class="mb-24 desktop:mb-10">
            &copy; {{ copyrightYear }} The Free and Open Source Silicon Foundation C.i.C.<br />
            Unit C5, Tenterfields Business Park, Halifax, HX2&nbsp;6EQ, United Kingdom
          </FfParaExcerpt>
          <div class="underline">
            <FfLink to="/policies">Policies</FfLink>
            <FfLink to="/licenses" class="ml-10">Licenses</FfLink>
          </div>
        </div>
        <div class="desktop:order-first desktop:mr-32">
          <FfLink to="/">
            <span class="sr-only">FOSSi Foundation home page</span>
            <img class="w-[180px]" src="~/assets/images/fossi-logo-full.svg" />
          </FfLink>
        </div>
      </div>
  </footer>
    </FfContainer>
</template>

<script>
export default {
  data() {
    return {
      copyrightYear: new Date().getFullYear(),
    };
  },
};
</script>

<script setup>
import IconFabLinkedinIn from '~icons/fa-brands/linkedin-in'
import IconFabTwitter from '~icons/fa-brands/twitter'
import IconFabMastodon from '~icons/fa-brands/mastodon'
</script>
