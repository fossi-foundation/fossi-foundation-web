<template>
  <FfCards class="my-20">
    <FfCardInformation v-for="person in people" :headline="person.name" :subheading="person.subheading" :img="person.img">
        <div class="my-20" v-if="person.socialLinks">
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
// TODO: The data modeling is a bit strange here; it would be nicer if we had
// an individual collection item per person, instead of a single collection item
// with an array of people.
const { data } = await useAsyncData('data', () => {
  return queryCollection('people').first()
})

// Sort people by name.
const people = data.value?.people.sort((a, b) => a.name.localeCompare(b.name));
</script>
