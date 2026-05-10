<script setup>
import Slugger from 'github-slugger'
const slugs = new Slugger()

const props = defineProps(['csvfile', 'view', 'scheduleday'])

let view = props.view;
const allowedViews = ['overview', 'schedule', 'details'];
if (!allowedViews.includes(view)) {
  view = 'overview';
}

// Data collections use `stem` (no leading slash) instead of `path`
const stem = props.csvfile.replace(/^\//, '')
const { data: talkData } = await useAsyncData('talks-' + props.csvfile, () =>
  queryCollection('talks').where('stem', '=', stem).first()
)
const talks = computed(() => talkData.value?.body ?? [])
const talksOnScheduleDay = computed(() =>
  talks.value.filter((talk) => { return talk.Day == props.scheduleday && (talk.Type == 'Normal' || talk.Type == 'Break') })
)

import IconFabYoutube from '~icons/fa6-brands/youtube'
import IconPhPresentation from '~icons/ph/presentation-bold'
</script>

<template>
  <div v-if="view == 'overview'">
    <p v-for="talk in talks" :key="talk.Title">
      <b>{{ talk.Title }}</b> - <i>{{ talk.Presenter }}</i> (<ProseA :to="'#' + slugs.slug(talk.Title)">details</ProseA>)
    </p>
  </div>
  <div v-else-if="view == 'schedule'">
    <table class="table-auto p-16 align-middle border-16 border-ultraviolet">
      <tbody>
        <tr v-for="talk in talksOnScheduleDay" :key="talk.Title" class="align-top">
          <td class="p-[4px] text-ultraviolet font-black text-right">{{ talk.Time }}</td>
          <td class="p-[4px]">
            <NuxtLink :to="'#' + slugs.slug(talk.Title)">
              <span :class="{ 'font-black': talk.Type != 'Break' }">{{ talk.Title }}</span><span v-if="talk.Presenter"> by {{ talk.Presenter }}</span>
            </NuxtLink>
            <span class="inline-flex space-x-10 px-10 align-middle">
              <ProseA v-if="talk.Youtube" title="Watch the recording on YouTube" :to="talk.Youtube"><IconFabYoutube/></ProseA>
              <ProseA v-if="talk.Slides" title="Presentation slides" :to="talk.Slides"><IconPhPresentation/></ProseA>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else-if="view == 'details'">
    <div v-for="talk in talks" :key="talk.Title">
      <div v-if="talk.Type == 'Normal' || talk.Type == 'Lightning Talk'">
        <ProseH3 :id=slugs.slug(talk.Title)>{{ talk.Title }} <span v-if="talk.Type == 'Lightning Talk'"> (lightning talk)</span></ProseH3>
        <div class="flex space-x-10 align-middle">
          <span>{{ talk.Presenter }}</span>
          <ProseA v-if="talk.Youtube" title="Watch the recording on YouTube" :to="talk.Youtube"><IconFabYoutube/></ProseA>
          <ProseA v-if="talk.Slides" title="Presentation slides" :to="talk.Slides"><IconPhPresentation/></ProseA>
        </div>
        <MDC v-if="talk.Abstract" :value="talk.Abstract" />
      </div>
    </div>
  </div>
</template>
