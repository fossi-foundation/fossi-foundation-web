<template>
    <div v-if="props.level == 'gold'"></div>
    <NuxtLink :class="levelClass" class="flex justify-center items-center">
        <NuxtImg v-bind="$attrs" width="100%" />
    </NuxtLink>
    <div v-if="props.level == 'gold'"></div>
</template>

<script setup lang="ts">
const props = defineProps(['link', 'level'])

const levelClass = props.level == 'headline' ? 'col-span-6' : (props.level == 'gold' ? 'col-span-4' : 'col-span-3');
</script>
