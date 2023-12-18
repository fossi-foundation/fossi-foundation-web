// @ts-ignore Importing '@nuxt/content/transformers' does not load type annotations.
// Importing from the runtime directory fails at build time. Ignore types and
// explicitly type the transformer below.
import { defineTransformer } from '@nuxt/content/transformers'
import type { MarkdownNode, ContentTransformer, MarkdownRoot } from '@nuxt/content/dist/runtime/types'

// Remove all links
function removeLinks(nodes: MarkdownNode[]) {
  return nodes.map(({ tag, children = undefined, ...rest }) => {
    const o: MarkdownNode = {...rest};

    // Change 'a' tag into 'span' tags.
    if (tag == 'a') {
      o.tag = 'span';
    } else {
      o.tag = tag;
    }

    // Recursively process children.
    if (children) {
      o.children = removeLinks(children)
    }
    return o
  })
}


// Convert an array of MarkdownNodes to a plaintext content string.
function toText(nodes: MarkdownNode[], text='') {
  for (const { type, value = undefined, children = undefined} of nodes) {
    if (type == 'element' && children) {
      text = toText(children, text)
    } else if (type == 'text') {
      text += value
    }
  }

  return text
}

export default defineTransformer(<ContentTransformer>{
  name: 'excerpt-transformer',
  extensions: ['.md'],
  transform: (content, options = {}) => {
    // Only deal with blog posts.
    if (content.layout != 'post')
      return content

    // No content: no excerpt or cover image available.
    if (!content.body) {
      content.excerpt = undefined
      content.coverImage = null

      return content
    }

    // Limit the excerpt to a single paragraph from the original post and remove
    // all markup (including links).
    const firstParagraph = content.body.children.filter(child => child.tag == 'p').slice(0, 1)
    content.excerpt = <MarkdownRoot>{
      type: 'root',
      children: [{type: 'text', value: toText(firstParagraph)}],
    };

    // Extract the first image in the blog post as cover image.
    const firstImgInPost = content.body.children.filter(child => child.tag == 'img')
    if (firstImgInPost && firstImgInPost.length >= 1 && firstImgInPost[0].props && firstImgInPost[0].props.src) {
      content.coverImage = firstImgInPost[0].props.src
    } else {
      content.coverImage = undefined
    }

    return content
  }
})
