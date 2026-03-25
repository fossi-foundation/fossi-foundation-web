<!--
LibreLane
-->
<template>
  <!--
  Signpost with large icon.
  https://fossi-foundation.zeroheight.com/styleguide/s/72268/p/53507c-signposts
  -->

  <FfContainer>

    <div class="flex flex-col mb-32 tablet:flex-row my-24 tablet:my-48 desktop:my-64">
      <div class="basis-1/2">
        <IconPhCpu class="text-ultraviolet mx-auto text-[100px] tablet:text-[150px]" />
      </div>
      <div class="basis-1/2">
        <FfH3>
          Chip design is hard. LibreLane makes it easy.
        </FfH3>
        <FfPara>
          LibreLane enables educators, researchers, hobbyists, and industry professionals alike to create manufacturable chips.
        </FfPara>
        <FfBtnCta linkTo="https://librelane.readthedocs.io/en/stable/installation/index.html">Install LibreLane now for Windows, macOS, or Linux.</FfBtnCta>
      </div>
    </div>

  </FfContainer>

</template>

<script setup>
import IconPhPolygon from '~icons/ph/polygon-bold'
import IconPhUsersThree from '~icons/ph/users-three-bold'
import IconPhChatsCircle from '~icons/ph/chats-circle-bold'
import IconPhCpu from '~icons/ph/cpu-bold'
</script>
