<!--
Supporting content block

A full-width block with gray background for supporting content.
-->
<template>
  <div class="bg-pastel-grey">
    <FfContainer class="py-24 tablet:py-64">
      <slot :use="$slots.default"/>
    </FfContainer>
  </div>
</template>
