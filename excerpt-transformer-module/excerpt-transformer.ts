import { defineTransformer } from '@nuxt/content'
import type { TransformedContent } from '@nuxt/content'

// In v3 the markdown body is stored in minimark format:
//   { type: 'minimark', value: MinimarkNode[] }
// A MinimarkNode is either a plain string (text) or a tuple:
//   [tag: string, props: Record<string, unknown>, ...children: MinimarkNode[]]
type MinimarkNode = string | [string, Record<string, unknown>, ...MinimarkNode[]]

// Recursively search for nodes matching a tag (depth-first).
function findByTag(nodes: MinimarkNode[], tag: string): MinimarkNode[] {
  const result: MinimarkNode[] = []
  for (const node of nodes) {
    if (Array.isArray(node)) {
      const [nodeTag, _props, ...children] = node
      if (nodeTag === tag) {
        result.push(node)
      } else {
        result.push(...findByTag(children, tag))
      }
    }
  }
  return result
}

export default defineTransformer({
  name: 'excerpt-transformer',
  extensions: ['.md'],
  transform: (content: TransformedContent) => {
    // Only process blog posts.
    if (content.layout !== 'post') return content

    if (!content.body) {
      content.coverImage = undefined
      return content
    }

    const bodyValue: MinimarkNode[] = (content.body as any).value ?? []

    // Extract the first image anywhere in the post as the cover image.
    const images = findByTag(bodyValue, 'img')
    if (images.length >= 1 && Array.isArray(images[0]) && images[0][1]?.src) {
      content.coverImage = images[0][1].src as string
    } else {
      content.coverImage = undefined
    }

    return content
  }
})
