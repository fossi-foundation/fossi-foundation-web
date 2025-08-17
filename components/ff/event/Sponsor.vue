<template>
    <NuxtLink v-if="link" :to="link" class="p-10 self-center" :class="levelClass">
        <NuxtImg v-bind="$attrs" />
    </NuxtLink>
    <NuxtImg v-else class="p-10 self-center" :class="levelClass" />
</template>

<script setup lang="ts">
const props = defineProps(['link', 'level'])

const levelClass = (props.level == 'headline' || props.level == 'major') ? 'col-span-2' : '';
</script>
