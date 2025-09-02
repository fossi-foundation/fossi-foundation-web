import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory, except for the blog
    // pages.
      source: {
        include: '**/*.md',
        exclude: [
          'blog/**'
        ]
      },
      schema: z.object({
        layout: z.string().optional(),
        header: z.string().optional(),
      })
    }),

    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        date: z.string(),
        author: z.string()
      })
    }),

    people: defineCollection({
      type: 'data',
      source: 'about-us/people/*.yaml',
      schema: z.object({
        people: z.array(
          z.object({
            name: z.string(),
            subheading: z.string(),
            img: z.string(),
            about: z.string(),
            socialLinks: z.object({
              email: z.string().optional(),
              linkedInUrl: z.string().optional(),
              githubUrl: z.string().optional(),
              xTwitterUrl: z.string().optional(),
            }).optional(),
          })
        )
      })
    })
  }
})
