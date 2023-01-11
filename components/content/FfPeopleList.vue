<template>
  <FfCards class="my-20">
    <FfCardInformation v-for="person in people" :headline="person.name" :subheading="person.subheading" :img="person.img">
        <div class="my-20" v-if="'socialLinks' in person">
          <FfSocialLinkCollection
            :linkedInUrl="person.socialLinks.linkedInUrl"
            :twitterUrl="person.socialLinks.twitterUrl"
            :githubUrl="person.socialLinks.githubUrl"
            :email="person.socialLinks.email"
          />
        </div>

        {{ person.about }}
    </FfCardInformation>
  </FfCards>
</template>


<script setup lang="ts">
const data = await queryContent('/about-us/people/_people')
  .findOne()

// Sort people by name.
// TODO: Sorting breaks the association of images to other content (e.g., the
// name). This looks at first sight like a problem in Nuxt Content Assets, but
// that's to be confirmed.
//const people = data.people.sort((a, b) => a.name > b.name);

const people = data.people
</script>
