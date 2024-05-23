<!--
Homepage
-->
<template>
  <FfHeaderHero />

  <!--
  Signpost with large icon.
  https://fossi-foundation.zeroheight.com/styleguide/s/72268/p/53507c-signposts
  -->

  <FfContainer>
    <!--
    TODO: Enable once we have a tools/project listing up.
    <div class="flex flex-col mb-32 tablet:flex-row my-24 tablet:my-48 desktop:my-64">
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
        <FfBtnCta>Browse Projects</FfBtnCta>
      </div>
    </div>-->
    <div class="flex flex-col mb-32 tablet:flex-row my-24 tablet:my-48 desktop:my-64">
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
        <FfBtnCta linkTo="/get-involved">Get involved in open silicon</FfBtnCta>
      </div>
    </div>
    <div class="flex flex-col mb-32 tablet:flex-row my-24 tablet:my-48 desktop:my-64">
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
        <FfBtnCta linkTo="/our-work">Explore how the FOSSi Foundation helps</FfBtnCta>
      </div>
    </div>
  </FfContainer>

  <!--
  Event announcement
  -->
  <FfSignpostBanner
    class="bg-[url('/images/banner-orconf.jpg')]"
    title="ORConf 2024 announced!"
    ctaLabel="Visit the ORConf 2024 conference page for details"
    ctaTo="/latch-up/2024"
  >
    <p>Join us in Gothenburg, Sweden from September 13 to 15, 2024 for our 10th installment of ORConf, our European open source silicon conference.</p>
  </FfSignpostBanner>

  <!--
  News
  -->
  <div class="bg-pastel-grey">
    <FfContainer class="py-32 bg-pastel-grey">
      <FfH3 class="text-warm-black text-center mx-auto mb-32">
        Latest FOSSi Foundation News
      </FfH3>

      <FfCards>
        <FfBlogPostCard v-for="post in blogPosts" :post="post" />
      </FfCards>
    </FfContainer>
  </div>

  <!--
  Callout: El Correo Libre
  -->
  <FfCalloutNewsletter/>
</template>

<script setup>
import IconPhPolygon from '~icons/ph/polygon-bold'
import IconPhUsersThree from '~icons/ph/users-three-bold'
import IconPhCpu from '~icons/ph/cpu-bold'

// Get the three most recent blog posts
const blogPosts = await queryContent('/blog')
.sort({date: -1 }) // show latest articles first
.where({_partial: false })
.where({ _id: { $ne: 'content:blog:index.md' } }) // Filter out the blog overview page.
.limit(3)
.find()
</script>
