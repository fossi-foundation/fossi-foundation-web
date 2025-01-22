<!--
Newsletter callout

Style guide reference: Web components/Alerts and Callouts/Callout
-->
<template>
  <div class="bg-ultraviolet">
    <FfContainer class="py-32">
      <div class="flex flex-col desktop:flex-row items-center">
        <NuxtImg src="/images/ecl-logo-fossi.svg" class="w-96 h-96 my-auto" />
        <FfH3 class="grow text-white mx-32 my-32">
          El Correo Libre! Explore the free and open source silicon landscape
          through monthly news and hot topics.
        </FfH3>
        <FfBtnCta class="whitespace-nowrap transition-transform duration-300 hover:scale-105 hover:shadow-lg" inverted linkTo="/news">Read the latest</FfBtnCta>
      </div>
    </FfContainer>
  </div>
</template>
