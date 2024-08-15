<script setup>
const { data } = await useAsyncData('talks', () => queryContent('/orconf/2024/talks').find())
const talks = data.value[0].body
</script>

<template>
  <div>
    <p v-for="(talk) in talks" :key="index">
        <b>{{ talk.Title }}</b> - <i>{{ talk.Presenter }}</i>
    </p>
  </div>
</template>