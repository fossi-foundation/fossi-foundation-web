<!--
The main navigation bar

Style guide reference: Web components/Navigation/Navbar

TODO:
- Mobile: the distinct open and close buttons are not implemented.
  Instead, the hamburger menu is shown unconditionally.
- Desktop: the menu items are right-aligned, while (maybe) only the
  "Get involved" button is supposed to be right-aligned, and the remainder of
  the items should be centered.
- Menu items are only marked "active" if the exact page is currently shown, not
  if a child page is chosen. The style guide doesn't mandate a specific
  behavior, but it would probably help users if we marked the top-level item
  as active when a child page is shown.
-->
<template>
  <FfContainer>
    <nav class="py-20 font-black text-ultraviolet">
      <div class="flex flex-wrap items-center justify-between mx-auto">
        <!-- logo -->
        <FfLinkLarge to="/" class="flex-none">
          <span class="sr-only">FOSSi Foundation home page</span>
          <img class="w-[180px]" src="~/assets/images/fossi-logo-full.svg" />
        </FfLinkLarge>

        <!-- hamburger icon (phone/tablet only) -->
        <button data-collapse-toggle="navbar" type="button" class="inline-flex items-center desktop:hidden" aria-controls="navbar" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-48 h-48" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          </svg>
        </button>

        <!-- navigation items -->
        <div class="hidden items-center justify-between w-full desktop:flex desktop:w-auto desktop:order-1" id="navbar">
          <ul class="flex flex-col px-16 mt-16 desktop:mt-0 space-y-20 desktop:flex-row desktop:space-y-0 desktop:space-x-16 desktop:items-center">
            <li>
              <FfLinkLarge class="block" to="/">Home</FfLinkLarge>
            </li>
            <li>
              <FfLinkLarge class="block" to="/free-and-open-source-silicon">What is Open Silicon</FfLinkLarge>
            </li>
            <li>
              <FfLinkLarge class="block" to="/about-us">Who we are</FfLinkLarge>
            </li>
            <li>
              <FfLinkLarge class="block" to="/our-work">What we do</FfLinkLarge>
            </li>
            <li>
              <FfLinkLarge class="block" to="/events">Events</FfLinkLarge>
            </li>
            <li>
              <FfLinkLarge class="block" to="/news">News</FfLinkLarge>
            </li>
            <li>
              <FfBtnCta linkTo="/get-involved">Get involved</FfBtnCta>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </FfContainer>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// JS for the mobile menu: initialize components based on data attribute
// selectors
onMounted(() => {
  initFlowbite();
});
</script>
