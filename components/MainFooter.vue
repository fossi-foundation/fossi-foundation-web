<template>
  <footer class="max-w-[1600px] mx-auto text-nasu-purple px-96 py-64 font-bold">
    <div class="flex">
      <ul class="flex grow space-x-16 underline items-center">
        <li><a href="/free-and-open-silicon">What is Open Silicon</a></li>
        <li><a href="/about-us">Who we are</a></li>
        <li><a href="/our-work">What we do</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/get-involved">Get involved</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div class="flex space-x-16 items-center">
        <div>Follow @FossiFoundation</div>
        <a href="https://twitter.com/FossiFoundation">
          <font-awesome-icon icon="fa-brands fa-twitter" class="text-3xl" />
        </a>
        <a href="https://www.linkedin.com/company/fossi-foundation/">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" class="text-3xl" />
        </a>
      </div>
    </div>
    <div class="mt-48 flex">
      <div>
        <a class="flex-none overflow-hidden" href="/">
          <span class="sr-only">FOSSi Foundation home page</span>
          <img class="flex w-[180px]" src="~/assets/images/fossi-logo-full.svg" />
        </a>
      </div>
      <div>
        <p>
          &copy; {{ copyrightYear }} The Free and Open Source Silicon Foundation C.i.C.<br />
          Unit C5, Tenterfields Business Park, Halifax, HX2&nbsp;6EQ, United Kingdom
        </p>
        <div class="underline">
          <a href="#">Policies</a>
          <a href="#" class="ml-10">Licenses</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="js">
export default {
  data() {
    return {
      copyrightYear: new Date().getFullYear(),
    };
  },
};
</script>
