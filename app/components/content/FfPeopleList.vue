<template>
  <FfCards class="my-20">
    <FfCardInformation v-for="person in people" :headline="person.name" :subheading="person.subheading" :img="person.img">
        <div class="my-20" v-if="'socialLinks' in person">
          <FfSocialLinkCollection
            :linkedInUrl="person.socialLinks.linkedInUrl"
            :xTwitterUrl="person.socialLinks.xTwitterUrl"
            :githubUrl="person.socialLinks.githubUrl"
            :email="person.socialLinks.email"
          />
        </div>

        {{ person.about }}
    </FfCardInformation>
  </FfCards>
</template>


<script setup lang="ts">
const { data } = await useAsyncData('people', () =>
  queryCollection('people').first()
)

const people = computed(() => data.value?.people ?? [])
</script>
