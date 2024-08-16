<script setup>
import Slugger from 'github-slugger'
const slugs = new Slugger()

const props = defineProps(['csvfile', 'view'])

let view = props.view;
const allowedViews = ['overview', 'schedule', 'details'];
if (!allowedViews.includes(view)) {
  view = 'overview';
}

const { data } = await useAsyncData('talks', () => queryContent(props.csvfile).find())
const talks = data.value[0].body
</script>

<template>
  <div v-if="view=='overview'">
    <p v-for="(talk) in talks" :key="index">
        <b>{{ talk.Title }}</b> - <i>{{ talk.Presenter }}</i> (<ProseA :to="'#' + slugs.slug(talk.Title)">details</ProseA>)
    </p>
  </div>
  <div v-else-if="view=='schedule'">
  </div>
  <div v-else-if="view=='details'">
    <div v-for="(talk) in talks" :key="index">
      <ProseH3 :id=slugs.slug(talk.Title)>{{ talk.Title }}</ProseH3>
      <i>{{ talk.Presenter }}</i>
      <ProseP>{{ talk.Abstract }}</ProseP>
    </div>
  </div>
</template>