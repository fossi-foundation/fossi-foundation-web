<template>
  <Hero />

  <!-- Multi-column text https://zeroheight.com/822235964/p/779fcb-content-blocks -->
  <div class="bg-pattern-resources bg-contain border-none bg-repeat">
    <div class="desktop:container mx-auto flex flex-col text-white md:flex-row p-64 md:space-x-64">
      <div>
        <div class="font-black text-4xl">99k</div>
        <div class="font-bold text-2xl mt-16">
          Members worldwide from hobbyists to academics and industry
          professionals.
        </div>
      </div>
      <div>
        <div class="font-black text-4xl">99k</div>
        <div class="font-bold text-2xl mt-16">
          Members worldwide from hobbyists to academics and industry
          professionals.
        </div>
      </div>
      <div>
        <div class="font-black text-4xl">99k</div>
        <div class="font-bold text-2xl mt-16">
          Members worldwide from hobbyists to academics and industry
          professionals.
        </div>
      </div>
    </div>
  </div>


  <!--
    Signpost with large icon.
    https://fossi-foundation.zeroheight.com/styleguide/s/72268/p/53507c-signposts
  -->

  <div class="desktop:container mx-auto ">
    <h3 class="font-black text-warm-black text-center text-2xl mt-32">
      The FOSSi Foundation is the custodian of the Free and Open Source Silicon
      movement.
    </h3>

    <div class="flex flex-row px-96 py-32">
      <div class="basis-1/2">
        <ph-polygon :size="150" weight="bold" class="text-ultraviolet mx-auto" />
      </div>
      <div class="basis-1/2">
        <h3 class="text-ultraviolet font-black text-2xl mb-20">
          Make a difference, don't reinvent UART
        </h3>
        <p>
          Pour your creativity into where you can make a difference! Open source
          components give you a head-start. High-quality IP blocks, fast
          simulators and synthesis tools, and much more is available for you to
          build and use.
        </p>
        <FfCtaButton class="mt-20">Browse Projects</FfCtaButton>
      </div>
    </div>
    <div class="flex flex-row px-96 py-32">
      <div class="basis-1/2">
        <ph-users-three :size="150" weight="bold" class="text-ultraviolet mx-auto" />
      </div>
      <div class="basis-1/2">
        <h3 class="text-ultraviolet font-black text-2xl mb-20">
          Unlock the full potential: be a contributor
        </h3>
        <p class="font-medium text-base">
          Open source is so much more than free of cost: it gives everybody,
          including you, the ability to shape the future of a project. Unlock the
          full benefits of open source today and become a contributor! Participate
          in discussions, report bugs, share your improvements, or even start a
          new free and open source silicon project!
        </p>
        <FfCtaButton class="mt-20">Get involved</FfCtaButton>
      </div>
    </div>
    <div class="flex flex-row px-96 py-32">
      <div class="basis-1/2">
        <ph-cpu :size="150" weight="bold" class="text-ultraviolet mx-auto" />
      </div>
      <div class="basis-1/2">
        <h3 class="text-ultraviolet font-black text-2xl mb-20">
          Chip design is hard. Using open source isn't
        </h3>
        <p>
          The FOSSi Foundation is here to enable everyone to collaborate,
          innovate, and enjoy the benefits of open source chip design. Get to know
          like-minded developers at conferences like ORConf. Read about what's
          happening in our world in our newsletter El Correo Libre. And reach out
          to us if you feel confused. We're here to help.
        </p>
        <FfCtaButton class="mt-20">What we do</FfCtaButton>
      </div>
    </div>
  </div>

  <!--
  Signpost: Banner
  https://fossi-foundation.zeroheight.com/styleguide/s/72268/p/53507c-signposts
  -->
  <div class="text-white bg-[url('~/assets/images/banner-orconf.jpg')] bg-cover bg-center ">
    <div class="px-96 py-64 desktop:container mx-auto">
      <h2 class="font-black text-4xl mb-16">Attend Latch-Up 2023</h2>
      <h3 class="font-black text-2xl mb-16">March 31st - April 2nd 2023, Santa Barbara, California</h3>
      <FfCtaButton inverted>Event details</FfCtaButton>
    </div>
  </div>

  <!--
  Signpost card
  https://fossi-foundation.zeroheight.com/styleguide/s/72268/p/538bf1-cards
  -->
  <div class="bg-pastel-grey">
    <div class="desktop:container mx-auto  ">
      <h3 class="font-black text-warm-black text-center text-2xl py-32">
        Latest FOSSi News
      </h3>

      <div class="flex flex-row space-x-32 px-96 pb-64">
        <div class="shadow-mid hover:shadow-low bg-[url('~/assets/images/banner-orconf.jpg')] bg-top bg-cover">
          <div class="bg-white mt-[192px] p-24">
            <div class="border-b-4 border-ultraviolet">
              <a href="#" class="text-ultraviolet font-black text-xl">Card headline link over two lines</a>
            </div>
            <div class="text-ultraviolet font-bold text-base my-10">
              4th - 8th April, 2022
            </div>
            <div class="font-bold text-warm-black text-base">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>

        <div class="shadow-mid hover:shadow-low bg-[url('~/assets/images/banner-orconf.jpg')] bg-top bg-cover">
          <div class="bg-white mt-[192px] p-24">
            <div class="border-b-4 border-ultraviolet">
              <a href="#" class="text-ultraviolet font-black text-xl">Card headline link over two lines</a>
            </div>
            <div class="text-ultraviolet font-bold text-base my-10">
              4th - 8th April, 2022
            </div>
            <div class="font-bold text-warm-black text-base">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>

        <div class="shadow-mid hover:shadow-low bg-[url('~/assets/images/banner-orconf.jpg')] bg-top bg-cover">
          <div class="bg-white mt-[192px] p-24">
            <div class="border-b-4 border-ultraviolet">
              <a href="#" class="text-ultraviolet font-black text-xl">Card headline link over two lines</a>
            </div>
            <div class="text-ultraviolet font-bold text-base my-10">
              4th - 8th April, 2022
            </div>
            <div class="font-bold text-warm-black text-base">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--
  Newsletter callout
  https://fossi-foundation.zeroheight.com/styleguide/s/72268/p/04f921-alerts-and-callouts
  -->
  <div class="bg-ultraviolet">

    <div class="px-96 py-12 desktop:container mx-auto">
      <div class="flex flex-row">
        <img src="~assets/images/ecl-logo-fossi.svg" class="w-96 h-96 my-auto"/>
        <div class="grow font-black text-white text-2xl mx-32 my-32 w-[720px]">
          El Correo Libre! Explore the free and open source silicon landscape
          through monthly news and hot topics.
        </div>
        <FfCtaButton inverted class="my-32">Read the latest</FfCtaButton>
      </div>
    </div>
  </div>
</template>
