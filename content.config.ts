import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        layout: z.string().optional(),
        author: z.string().optional(),
        date: z.coerce.date().optional(),
        header: z.string().optional(),
        navTitle: z.string().optional(),
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        excerpt: z.string().optional(),
        coverImage: z.string().optional(),
        eventbriteEventId: z.number().optional(),
      }),
    }),
    people: defineCollection({
      type: 'data',
      source: 'about-us/people/_people.yaml',
      schema: z.object({
        people: z.array(z.object({
          name: z.string(),
          subheading: z.string().optional(),
          img: z.string().optional(),
          about: z.string().optional(),
          socialLinks: z.object({
            linkedInUrl: z.string().optional(),
            xTwitterUrl: z.string().optional(),
            githubUrl: z.string().optional(),
            email: z.string().optional(),
          }).optional(),
        }))
      })
    }),
    talks: defineCollection({
      type: 'data',
      source: '**/*.csv',
      schema: z.object({
        body: z.array(z.object({
          Day: z.string(),
          Time: z.string(),
          Type: z.enum(['Normal', 'Break', 'Lightning Talk', '']),
          Title: z.string(),
          Presenter: z.string().optional(),
          Notes: z.string().optional(),
          Abstract: z.string().optional(),
          Youtube: z.string().optional(),
          Slides: z.string().optional(),
        })),
      }),
    }),
  },
})
