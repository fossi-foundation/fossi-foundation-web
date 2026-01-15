<!--
The main navigation bar

Style guide reference: Web components/Navigation/Navbar

TODO:
- Desktop: the menu items are right-aligned, while (maybe) only the
  "Get involved" button is supposed to be right-aligned, and the remainder of
  the items should be centered.
- Menu items are only marked "active" if the exact page is currently shown, not
  if a child page is chosen. The style guide doesn't mandate a specific
  behavior, but it would probably help users if we marked the top-level item
  as active when a child page is shown.
-->
<template>
  <div class="w-full desktop:max-w-container mx-auto px-20 tablet:px-48 desktop:px-96">
    <nav :style="{ paddingTop: navPadding, paddingBottom: navPadding }" class="py-8 font-black text-ultraviolet transition-all duration-300">
      <div class="flex flex-wrap items-center justify-between mx-auto">
        <!-- logo -->
        <FfLinkLarge to="/" class="flex-none">
          <span class="sr-only">FOSSi Foundation home page</span>
          <img class="w-[180px]" width="180" height="60" alt="The FOSSi Foundation" src="/images/fossi-logo-full.svg" />
        </FfLinkLarge>

        <!-- desktop menu: center items except CTA -->
        <div class="hidden desktop:flex flex-1 justify-center">
          <ul class="flex flex-row space-x-16 items-center">
            <li><FfLinkLarge class="block" to="/" :class="{ 'text-primary': isActiveOrChild('/') }">Home</FfLinkLarge></li>
            <li><FfLinkLarge class="block" to="/free-and-open-source-silicon" :class="{ 'text-primary': isActiveOrChild('/free-and-open-source-silicon') }">What is Open Silicon</FfLinkLarge></li>
            <li><FfLinkLarge class="block" to="/about-us" :class="{ 'text-primary': isActiveOrChild('/about-us') }">Who we are</FfLinkLarge></li>
            <li><FfLinkLarge class="block" to="/our-work" :class="{ 'text-primary': isActiveOrChild('/our-work') }">What we do</FfLinkLarge></li>
            <li><FfLinkLarge class="block" to="/events" :class="{ 'text-primary': isActiveOrChild('/events') }">Events</FfLinkLarge></li>
            <li><FfLinkLarge class="block" to="/news" :class="{ 'text-primary': isActiveOrChild('/news') }">News</FfLinkLarge></li>
          </ul>
        </div>
        <!-- desktop CTA: right align -->
        <div class="hidden desktop:flex flex-none justify-end min-w-[180px] ml-16">
          <FfBtnCta linkTo="/get-involved">Get involved</FfBtnCta>
        </div>

        <!-- hamburger icon (phone/tablet only) -->
        <button @click="showMobileNavbar = !showMobileNavbar" type="button" class="inline-flex items-center desktop:hidden" aria-controls="navbar" :aria-expanded="showMobileNavbar">
          <span class="sr-only">Open main menu</span>
          <IconPhList v-if="!showMobileNavbar" class="w-48 h-48" />
          <IconPhX v-if="showMobileNavbar" class="w-48 h-48" />
        </button>

        <!-- mobile menu -->
        <div class="items-center justify-between w-full desktop:hidden" :class="{ 'hidden': !showMobileNavbar }">
          <ul class="flex flex-col desktop:px-16 mt-24 desktop:mt-0 space-y-20 desktop:flex-row desktop:space-y-0 desktop:space-x-16 desktop:items-center">
            <li><FfLinkLarge class="block" to="/" :class="{ 'text-primary': isActiveOrChild('/') }">Home</FfLinkLarge></li>
            <li><FfLinkLarge class="block" to="/free-and-open-source-silicon" :class="{ 'text-primary': isActiveOrChild('/free-and-open-source-silicon') }">What is Open Silicon</FfLinkLarge></li>
            <li><FfLinkLarge class="block" to="/about-us" :class="{ 'text-primary': isActiveOrChild('/about-us') }">Who we are</FfLinkLarge></li>
            <li><FfLinkLarge class="block" to="/our-work" :class="{ 'text-primary': isActiveOrChild('/our-work') }">What we do</FfLinkLarge></li>
            <li><FfLinkLarge class="block" to="/events" :class="{ 'text-primary': isActiveOrChild('/events') }">Events</FfLinkLarge></li>
            <li><FfLinkLarge class="block" to="/news" :class="{ 'text-primary': isActiveOrChild('/news') }">News</FfLinkLarge></li>
            <li><FfBtnCta linkTo="/get-involved">Get involved</FfBtnCta></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from 'vue-router';
import IconPhList from '~icons/ph/list-bold';
import IconPhX from '~icons/ph/x-bold';

const showMobileNavbar = ref(false);
const navPadding = ref('2rem');
const route = useRoute();

// Helper to check if a route is active or a child is active
function isActiveOrChild(path) {
  return route.path === path || route.path.startsWith(path + '/');
}

onMounted(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      navPadding.value = '0.75rem';
    } else {
      navPadding.value = '2rem';
    }
  };
  window.addEventListener('scroll', handleScroll);
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>
