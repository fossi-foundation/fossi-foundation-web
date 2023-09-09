# www.fossi-foundation.org website sources

This repository contains the source code for the fossi-foundation.org website.
The site is built using [Nuxt](https://nuxt.com/) and
[Nuxt Content](https://content.nuxtjs.org/) and deployed to Netlify. Most
content is written in Markdown for easier editing, with the full power of Vue
available for advanced use cases.

## Contributing content

To contribute content to the website you don't need any local development setup:
edit any Markdown file in the `content` directory and open a pull request --
you'll get a preview build of the full website as part of the pull request.

You can add new Markdown files within the existing directories in `content`
which will show up as sub-page without further configuration.

In addition to plain Markdown, you can make use of pre-defined components from
the style guide using the
[MDC syntax](https://content.nuxtjs.org/guide/writing/mdc). Look for existing
pages using the `::` syntax for inspiration.

## Contributing more than content

To dive deeper into the website development you need a local development
environment, either through a VS Code Dev Container, or through a native Node.js
installation.

### Option 1: Local installation

Make sure that you have installed the following tools on your local machine.

* Node.js 18 (LTS). Other versions of Node.js might work, but also break
  occasionally. Using a LTS version is strongly recommended.
* Yarn

```bash
yarn install

# Start the development server on http://localhost:3000
# (Setting HOST is not strictly required, but helps if the HOST environment
# variable has a strange value.)
HOST=localhost yarn dev

# Build the application for production:
yarn run build

# Locally preview production build:
yarn run preview
```

### Option 2: VS Code Dev Container

- Open with Visual Studio Code with "Dev Containers" extension installed.
- After opening the repo, it will ask you if you want to reopen in container, which you want.
- Run above commands or run debug target "server: nuxt"

## Design

The website design follws the the
[FOSSi Foundation style guide](https://zeroheight.com/822235964). Make sure that
changes to the design are also reflected in the style guide, where necessary.

## Further topics

### Icons

We use icons from [Font Awesome Brands](https://fontawesome.com/) and
[Phosphor Icons](https://phosphoricons.com/). To keep the bundle size low all
icons have to be explicitly imported in a template.

Here's an `example.vue` component:

```html
<script setup>
import IconFabLinkedinIn from '~icons/fa6-brands/linkedin-in'
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
