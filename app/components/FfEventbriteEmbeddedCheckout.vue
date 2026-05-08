<!--
An Eventbrite embedded checkout

The embedded checkout can be presented either as embedded form
(type == 'inline') or as modal overlay over the page (type == 'modal'). By
default the inline variant is shown.

Note that the embedded checkout form only works from HTTPS origins, i.e., do not
expect it to work in a http://localhost development preview. The browser console
typically contains useful log messages if something doesn't work as expected.

Documentation is available at
https://www.eventbrite.co.uk/support/articleredirect?anum=40956
-->

<template>
  <div>
    <div v-if="type == 'inline'" :id="iframeContainerId" class="max-w-prose"></div>
    <div v-if="type == 'modal'" class="text-center max-w-prose">
    <FfBtnCta :id="modalTriggerElementId" type="button" linkTo="#">{{ buttonText }}</FfBtnCta>
    </div>
  </div>
</template>

<script setup lang="ts">

import { getCurrentInstance } from '#imports';


enum EBType {
  Inline = "inline",
  Modal = 'modal',
};

export interface Props {
  eventId: number
  type?: EBType
  buttonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: EBType.Inline,
  buttonText: "Get tickets"
})


onMounted(() => {
  // Load the Eventbrite embedded widgets script.
  const ebWidgetsScript = document.createElement("script");
  ebWidgetsScript.setAttribute(
    "src",
    "https://www.eventbrite.co.uk/static/widgets/eb_widgets.js"
  );
  ebWidgetsScript.setAttribute('type', 'text/javascript')
  ebWidgetsScript.defer = true
  ebWidgetsScript.onload = () => {
    ebWidgetsCreate()
  }
  document.head.appendChild(ebWidgetsScript);
})

const eventbriteLinkTo = "https://www.eventbrite.co.uk/e/" + props.eventId;

const iframeContainerId = props.eventId + "-iframe-container";
const modalTriggerElementId = props.eventId +  "-modal-trigger";

/*
const uuid = Number(Math.random()).toString(32)
const iframeContainerId = uuid + "-iframe-container";
const modalTriggerElementId = uuid + "-modal-trigger";*/

var exampleCallback = function () {
  console.log('Order complete!');
};

function ebWidgetsCreate() {
  let widgetProps = {
    // Required
    widgetType: 'checkout',
    eventId: props.eventId,

    // Optional
    onOrderComplete: exampleCallback  // Method called when an order has successfully completed
  }
  if (props.type == EBType.Modal) {
    widgetProps['modal'] = true;
    widgetProps["modalTriggerElementId"] = modalTriggerElementId;
  } else if (props.type == EBType.Inline) {
    widgetProps['iframeContainerId'] = iframeContainerId;
    widgetProps['iframeContainerHeight'] = 425;  // Widget height in pixels. Defaults to a minimum of 425px if not provided
  }
  window.EBWidgets.createWidget(widgetProps);
}

</script>
