# www.fossi-foundation.org website sources

This repository contains the source code for the fossi-foundation.org website.
The site is built using [Nuxt](https://nuxt.com/) and deployed to Netlify.

## Build requirements

Make sure that you have installed the following tools on your local machine.

* Node.js 18 (LTS)
* Yarn

## Development quickstart

```bash
yarn install

# Start the development server on http://localhost:3000
# (Setting HOST is not strictly required, but helps if the HOST environment
# variable has a strange value.)
HOST=localhost yarn run dev

# Build the application for production:
yarn run build

# Locally preview production build:
yarn run preview
```

## Icons

We use icons from [Font Awesome Brands](https://fontawesome.com/) and
[Phosphor Icons](https://phosphoricons.com/). To keep the bundle size low all
icons have to be explicitly imported in a template.

Here's an `example.vue` component:

```html
<script setup>
import IconFabLinkedinIn from '~icons/fa-brands/linkedin-in'
</script>

<template>
  <div>
    <IconFabLinkedinIn/>
  </div>
</template>
```

You can use https://icones.js.org/collection/ph and
https://icones.js.org/collection/fa6-brands to efficiently search for suitable
icons.
