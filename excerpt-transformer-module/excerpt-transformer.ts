// @ts-ignore
import { defineTransformer } from '@nuxt/content/transformers'

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

    // Extract the first image in the blog post as cover image.
    const firstImgInPost = content.body.children.filter(child => child.tag == 'img')
    if (firstImgInPost && firstImgInPost.length >= 1 && firstImgInPost[0].props && firstImgInPost[0].props.src) {
      content.coverImage = firstImgInPost[0].props.src
    } else {
      content.coverImage = null
    }

    return content
  }
})
