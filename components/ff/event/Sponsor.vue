<template>
    <div :class="levelClass"><center>
    <NuxtLink v-if="link" :to="link" class="p-10 self-center">
        <NuxtImg v-bind="$attrs" width="100%" class="self-center"/>
    </NuxtLink>
    <NuxtImg v-else class="p-10 self-center" :class="levelClass" />
</center></div>
</template>

<script setup lang="ts">
const props = defineProps(['link', 'level'])

const levelClass = (props.level == 'headline' || props.level == 'major') ? 'col-span-2' : '';
</script>
