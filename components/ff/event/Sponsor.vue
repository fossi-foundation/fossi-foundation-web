<template>
    <NuxtLink v-if="link" :to="link" class="self-center">
        <NuxtImg v-bind="$attrs" />
    </NuxtLink>
    <NuxtImg v-else class="self-center" />
</template>

<script setup>
const props = defineProps(['link'])
</script>