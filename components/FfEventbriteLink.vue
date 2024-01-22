<!--
An Eventbrite ticket checkout link
-->
<template>
  <FfLinkUnderline :title="title" :target="target" :to="eventbriteLinkTo">{{ text }}</FfLinkUnderline>
</template>

<script setup lang="ts">
export interface Props {
  eventId: number
  title?: string
  target?: string
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: "Get tickets on Eventbrite",
  text: "Get tickets on Eventbrite"
})

const eventbriteLinkTo = "https://www.eventbrite.co.uk/e/" + props.eventId;

</script>
