// @ts-ignore
import { defineTransformer } from '@nuxt/content/transformers'
import { visit } from 'unist-util-visit'

// Cover image used if no other image is found or specified.
const DEFAULT_COVER_IMAGE = '/assets/images/pattern-guardianship.png'

export default defineTransformer({
  name: 'excerpt-transformer',
  extensions: ['.md'],
  transform: async (content, options = {}) => {
    // Only deal with blog posts.
    if (content.layout != 'post')
      return

    // Limit the excerpt to a single paragraph from the original post, without
    // any headings.
    content.excerpt = {
      type: 'root',
      children: content.body.children.filter(child => child.tag == 'p').slice(0, 1),
    };

    // Extract the first image in the blog post as cover image, unless an
    // explicit cover image has been specified.
    const firstImgInPost = content.body.children.filter(child => child.tag == 'img')
    if (firstImgInPost && firstImgInPost.length >= 1 && firstImgInPost[0].props && firstImgInPost[0].props.src) {
      content.coverImage = firstImgInPost[0].props.src
    } else {
      content.coverImage = DEFAULT_COVER_IMAGE
    }

    return content
  }
})
