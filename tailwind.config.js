/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      maxWidth: {
        // Maximum container width, according to the style guide.
        'container': '1600px',
      },

      lineHeight: {
        'tighter': '1.1',
      },

      backgroundImage: {
        'hero': "url('~/assets/images/hero-bg.jpg')",
        'corner-reducedmark-nasu-purple': "url('~/assets/images/corner-reducedmark-nasu-purple.svg')",
        'pattern-community': "url('~/assets/images/pattern-community.png')",
        'pattern-guardianship': "url('~/assets/images/pattern-guardianship.png')",
        'pattern-innovation': "url('~/assets/images/pattern-innovation.png')",
        'pattern-resources': "url('~/assets/images/pattern-resources.png')",
      },
    },

    // NOTE: All settings below *override* the Tailwind defaults, making them
    // unavailable. Use the `extend` key above if the defaults should stay in
    // place.

    fontFamily: {
      sans: [
        'Public Sans Variable', 'sans-serif'
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

    // Font sizes
    // https://zeroheight.com/822235964/p/852315-typography and
    // https://zeroheight.com/822235964/p/48281f-typography
    fontSize: {
      '16': '16px', // base

      '20': '20px', // TODO: Not part of the typography scheme, but commonly used for "large links", e.g. in the main navbar.

      '24': '24px',
      '36': '36px',
      '54': '54px',
      '81': '81px',

      // Smaller font sizes for phone views only.
      'phone-20': '20px',
      'phone-25': '25px',
      'phone-31': '31px',
      'phone-39': '39px',
    },

    boxShadow: {
      // Elevation
      'high': '8.0px 10.0px 0.0px 0px rgba(33, 26, 29, 1.0)',
      'mid': '4.0px 4.0px 0.0px 0px rgba(33, 26, 29, 1.0)',
      'low': '2.0px 2.0px 0.0px 0px rgba(33, 26, 29, 1.0)',
    },

    colors: {
      inherit: 'inherit',
      current: 'currentColor',
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
      // The "neon" linear transition is achieved by
      // "bg-gradient-to-l from-ultraviolet to-pink-piano"
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

    // The style guide uses phone, tablet, and desktop names for breakpoints.
    // Numeric values are not given in the style guide, but chosen but chosen
    // based on common device dimensions, with values matching Tailwind
    // defaults.
    screens: {
      'phone': '640px', // sm
      'tablet': '768px', // md
      'desktop': '1280px', // xl
    },
  },
  plugins: [
    require('flowbite')
  ],
}
