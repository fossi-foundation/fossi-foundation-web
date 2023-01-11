<template>
  <NuxtLayout>
    <FfHeaderHero />

    <!-- Multi-column text https://zeroheight.com/822235964/p/779fcb-content-blocks -->
    <div class="bg-pattern-resources bg-contain border-none bg-repeat">
      <FfContainer class="flex flex-col text-white desktop:flex-row space-y-32 desktop:space-y-0 desktop:space-x-64 py-24 tablet:py-48 desktop:py-96">
        <div>
          <FfH2 class="text-white">99k</FfH2>
          <FfParaLg>
            Members worldwide from hobbyists to academics and industry
            professionals.
          </FfParaLg>
        </div>
        <div>
          <FfH2 class="text-white">99k</FfH2>
          <FfParaLg>
            Members worldwide from hobbyists to academics and industry
            professionals.
          </FfParaLg>
        </div>
        <div>
          <FfH2 class="text-white">99k</FfH2>
          <FfParaLg>
            Members worldwide from hobbyists to academics and industry
            professionals.
          </FfParaLg>
        </div>
      </FfContainer>
    </div>


    <!--
    Signpost with large icon.
    https://fossi-foundation.zeroheight.com/styleguide/s/72268/p/53507c-signposts
  -->

    <FfContainer>
      <FfH3 class="text-warm-black text-center mt-32">
        The FOSSi Foundation is the custodian of the Free and Open Source Silicon
        movement.
      </FfH3>

      <div class="flex flex-col mb-32 tablet:flex-row">
        <div class="basis-1/2">
          <IconPhPolygon class="text-ultraviolet mx-auto text-[100px] tablet:text-[150px]" />
        </div>
        <div class="basis-1/2">
          <FfH3 class="mb-20">
            Make a difference, don't reinvent UART
          </FfH3>
          <FfPara>
            Pour your creativity into where you can make a difference! Open source
            components give you a head-start. High-quality IP blocks, fast
            simulators and synthesis tools, and much more is available for you to
            build and use.
          </FfPara>
          <FfBtnCta class="mt-20 block w-full tablet:w-auto">Browse Projects</FfBtnCta>
        </div>
      </div>
      <div class="flex flex-col mb-32 tablet:flex-row">
        <div class="basis-1/2">
          <IconPhUsersThree class="text-ultraviolet mx-auto text-[100px] tablet:text-[150px]" />
        </div>
        <div class="basis-1/2">
          <FfH3>
            Unlock the full potential: be a contributor
          </FfH3>
          <FfPara>
            Open source is so much more than free of cost: it gives everybody,
            including you, the ability to shape the future of a project. Unlock the
            full benefits of open source today and become a contributor! Participate
            in discussions, report bugs, share your improvements, or even start a
            new free and open source silicon project!
          </FfPara>
          <FfBtnCta class="mt-20 block w-full tablet:w-auto">Get involved</FfBtnCta>
        </div>
      </div>
      <div class="flex flex-col mb-32 tablet:flex-row">
        <div class="basis-1/2">
          <IconPhCpu class="text-ultraviolet mx-auto text-[100px] tablet:text-[150px]" />
        </div>
        <div class="basis-1/2">
          <FfH3>
            Chip design is hard. Using open source isn't
          </FfH3>
          <FfPara>
            The FOSSi Foundation is here to enable everyone to collaborate,
            innovate, and enjoy the benefits of open source chip design. Get to know
            like-minded developers at conferences like ORConf. Read about what's
            happening in our world in our newsletter El Correo Libre. And reach out
            to us if you feel confused. We're here to help.
          </FfPara>
          <FfBtnCta class="mt-20 block w-full tablet:w-auto">What we do</FfBtnCta>
        </div>
      </div>
    </FfContainer>

    <!--
    Signpost: Banner
    https://fossi-foundation.zeroheight.com/styleguide/s/72268/p/53507c-signposts
    -->
    <div class="text-white bg-[url('~/assets/images/banner-orconf.jpg')] bg-cover bg-center ">
      <FfContainer class="py-24 tablet:py-48 desktop:py-96">
        <FfH2 class="text-white">Attend Latch-Up 2023</FfH2>
        <FfH3 class="text-white mb-16">March 31st - April 2nd 2023, Santa Barbara, California</FfH3>
        <FfBtnCta class="block w-full tablet:w-auto" inverted>Event details</FfBtnCta>
      </FfContainer>
    </div>

    <!--
    Signpost card
    https://fossi-foundation.zeroheight.com/styleguide/s/72268/p/538bf1-cards
    -->
    <div class="bg-pastel-grey">
      <FfContainer class="py-32">
        <FfH3 class="text-warm-black text-center mb-32">
          Latest FOSSi News
        </FfH3>

        <FfCards>
          <FfCardSignpost headline="Card headline over two lines Card headline over two lines" date="4th - 8th April, 2022" target="#">
            <template #img>
              <img src="~/assets/images/pattern-guardianship.png"/>
            </template>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </FfCardSignpost>

          <FfCardSignpost headline="Card headline over two lines" target="#">
            <template #img>
              <img src="~/assets/images/banner-orconf.jpg"/>
            </template>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </FfCardSignpost>

          <FfCardSignpost headline="Card headline over two lines" date="4th - 8th April, 2022" target="#">
            <template #img>
              <img src="~/assets/images/pattern-guardianship.png"/>
            </template>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </FfCardSignpost>
        </FfCards>
      </FfContainer>
    </div>

    <!--
  Newsletter callout
  https://fossi-foundation.zeroheight.com/styleguide/s/72268/p/04f921-alerts-and-callouts
  -->
  <FfCalloutNewsletter/>
  </NuxtLayout>
</template>

<script setup>
import IconPhPolygon from '~icons/ph/polygon-bold'
import IconPhUsersThree from '~icons/ph/users-three-bold'
import IconPhCpu from '~icons/ph/cpu-bold'
</script>
