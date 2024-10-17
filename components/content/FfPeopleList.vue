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

// Add SEO-related meta tags
useHead({
  title: 'People - FOSSi Foundation',
  meta: [
    { name: 'description', content: 'Meet the people behind the FOSSi Foundation.' },
    { property: 'og:title', content: 'People - FOSSi Foundation' },
    { property: 'og:description', content: 'Meet the people behind the FOSSi Foundation.' },
    { property: 'og:image', content: 'https://fossi-foundation.org/images/people.jpg' },
    { property: 'og:url', content: 'https://fossi-foundation.org/about-us/people' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'People - FOSSi Foundation' },
    { name: 'twitter:description', content: 'Meet the people behind the FOSSi Foundation.' },
    { name: 'twitter:image', content: 'https://fossi-foundation.org/images/people.jpg' }
  ]
})
</script>
