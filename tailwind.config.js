/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1600px',
      },
      maxWidth: {
        'desktop': '1600px',
      },

      backgroundImage: {
        'hero': "url('~/assets/images/hero-bg.jpg')",
        'pattern-community': "url('~/assets/images/pattern-community.png')",
        'pattern-guardianship': "url('~/assets/images/pattern-guardianship.png')",
        'pattern-innovation': "url('~/assets/images/pattern-innovation.png')",
        'pattern-resources': "url('~/assets/images/pattern-resources.png')",
      },

      // TailwindCSS Typography plugin configuration.
      // The styling here applies to most content pages.
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // paragraph
            color: theme('colors.warm-black'),
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '150%',

            // Headers. Nuxt content makes them a link as well, so we need to
            // override some a-related classes.
            h2: {
              color: theme('colors.ultraviolet'),
              'font-size': '36px',
              'font-weight': '900',
              a: {
                'text-decoration': 'none',
                'font-weight': 'inherit',
                'color': 'inherit',
              },
            },
          },
        },
      })
    },

    fontFamily: {
      sans: [
        'Public SansVariable', 'sans-serif'
        // TODO: Look into that.
        //,{ fontFeatureSettings: '"ss01"'}
      ],
      mono: ["IBM Plex Mono", "Liberation Mono", "Source Code Pro", 'monospace']
    },

    // Reduce the selection to the font weights we actually use.
    fontWeight: {
      normal: '400',
      bold: '700',
      black: '900',
    },

    boxShadow: {
      // Elevation
      'high': '8.0px 10.0px 0.0px 0px rgba(33, 26, 29, 1.0)',
      'mid': '4.0px 4.0px 0.0px 0px rgba(33, 26, 29, 1.0)',
      'low': '2.0px 2.0px 0.0px 0px rgba(33, 26, 29, 1.0)',
    },

    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'black': '#000000',
      'ultraviolet': '#6320EE',
      'pink-piano': '#F72585',
      'warm-black': '#211A1D',
      'dark-pastel-grey': '#211A1D',
      'pastel-grey': '#F8F5FA',
      'nasu-purple': '#5D16CE',
      'shade-of-violet': '#7209B7',
      'fuchsia-flourish': '#D61E92',
      'neon': 'linear-gradient(-90.0deg, rgba(99, 32, 238, 1.0) 0%, rgba(247, 37, 133, 1.0) 100%)',
    },

    spacing: {
      '0': '0',
      '10': '10px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '32': '32px',
      '48': '48px',
      '64': '64px',
      '96': '96px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
