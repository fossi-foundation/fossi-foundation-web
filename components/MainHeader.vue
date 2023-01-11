<template>
  <header>
    <div class="max-w-[1600px] mx-auto text-xl font-bold text-nasu-purple px-48 py-20">
      <div class="relative flex items-center">
        <a class="flex-none overflow-hidden" href="/">
          <span class="sr-only">FOSSi Foundation home page</span>
          <img class="flex w-[180px]" src="~/assets/images/fossi-logo-full.svg" />
        </a>

        <nav class="ml-64 grow">
          <ul class="flex space-x-16">
            <li><router-link to="/">Home</router-link></li>
            <li><a href="/free-and-open-silicon">What is Open Silicon</a></li>
            <li><a href="/about-us">Who we are</a></li>
            <li><a href="/our-work">What we do</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div class="flex items-center ml-64">
          <FfCtaButton>Get involved</FfCtaButton>
        </div>
      </div>
    </div>
  </header>
</template>
