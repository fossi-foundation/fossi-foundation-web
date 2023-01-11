// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
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
    '@fontsource/public-sans/variable.css',
    '@fontsource/public-sans/variable-italic.css',

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
    }
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
