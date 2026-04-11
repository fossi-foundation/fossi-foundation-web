import { resolve } from 'path'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (_options, nuxt) {
    // Register the transformer via the v3 content.build.transformers option.
    nuxt.hook('modules:done', () => {
      const transformerPath = resolve('./excerpt-transformer-module/excerpt-transformer.ts')
      // @ts-ignore
      nuxt.options.content = nuxt.options.content || {}
      // @ts-ignore
      nuxt.options.content.build = nuxt.options.content.build || {}
      // @ts-ignore
      nuxt.options.content.build.transformers = nuxt.options.content.build.transformers || []
      // @ts-ignore
      nuxt.options.content.build.transformers.push(transformerPath)
    })
  }
})
