<template>
    <NuxtLink v-if="link" :to="link" class="self-center" :class="levelClass">
        <NuxtImg v-bind="$attrs" />
    </NuxtLink>
    <NuxtImg v-else class="self-center" :class="levelClass" />
</template>

<script setup lang="ts">
const props = defineProps(['link', 'level'])

const levelClass = props.level == 'headline' ? 'col-span-3' : '';
</script>
