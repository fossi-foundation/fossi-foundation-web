<script setup>
defineProps({inverted: Boolean})
</script>

<template>
  <!-- Call-to-action button -->
  <button class="font-black text-2xl px-20 py-10 rounded-tr-xl shadow-mid " :class="{'bg-ultraviolet': !inverted, 'bg-white': inverted, 'text-white': !inverted, 'text-ultraviolet': inverted}"><slot></slot></button>
</template>
