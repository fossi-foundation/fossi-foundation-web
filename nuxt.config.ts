// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-content-assets', // needs to be before @nuxt/content
    '@nuxt/content',
    ['unplugin-icons/nuxt', { /* options */ }],
  ],

  // Make all components in ~/components available for Nuxt Content through its
  // MDC syntax, not only the ones in ~/components/content (which are global by
  // default).
  components: {
    global: true,
    dirs: ['~/components']
  },

  // If you have enabled Take Over Mode or installed the TypeScript Vue Plugin
  // (Volar), you can disable generating the shim for *.vue files in your
  // nuxt.config file:
  // https://nuxt.com/docs/getting-started/installation#prerequisites
  typescript: {
    shim: false
  },

  css: [
    // Typography
    '@fontsource-variable/public-sans',
    '@fontsource-variable/public-sans/wght-italic.css',

    '@fontsource/ibm-plex-mono/latin-400.css',
    '@fontsource/ibm-plex-mono/latin-700.css',

    // Application CSS
    '~/assets/css/main.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },

  // Nuxt Content configuration
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: {
      // The configuration below is supposed to be default according to
      // https://content.nuxtjs.org/api/configuration#documentdriven, but that's
      // somehow not the case.
      // TODO: Double-check after a while and simplify to 'documentDriven: true'
      globals: {
        theme: {
          where:
          {
            _id: 'content:_theme.yml',
          },
        },
      },
    },
    highlight: {
      // See https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "github-light",
      preload: [
        // Add all languages here for which code highlighting is desired.
        // https://github.com/shikijs/shiki/blob/main/docs/languages.md
        'bash',
        'python',
      ]
    },
  },

  // Nuxt Content Assets configuration.
  // See https://github.com/davestewart/nuxt-content-assets for options.
  'content-assets': {
    // add image size hints
    imageSize: 'attrs url',
  },

  app: {
    head: {
      title: 'FOSSi Foundation',
      htmlAttrs: {
        lang: 'en',
      },
    }
  }
});
