import { defineTransformer } from '@nuxt/content'
import type { MinimarkElement, MinimarkNode } from '@nuxt/content'

// v3 AST: MinimarkNode = string | [tag, props, ...children]
function isElement(node: MinimarkNode): node is MinimarkElement {
  return Array.isArray(node)
}

function toText(nodes: MinimarkNode[]): string {
  return nodes.map(node => {
    if (typeof node === 'string') return node
    // children start at index 2 in the tuple
    return toText(node.slice(2) as MinimarkNode[])
  }).join('')
}

export default defineTransformer({
  name: 'excerpt-transformer',
  extensions: ['.md'],
  transform(content) {
    if (content.layout !== 'post') return content

    if (!content.body) {
      content.excerpt = undefined
      content.coverImage = undefined
      return content
    }

    // body is a MinimarkTree: { type: 'minimark', value: MinimarkNode[] }
    const children = ((content.body as Record<string, unknown>).value ?? []) as MinimarkNode[]

    const firstParagraph = children.find(c => isElement(c) && c[0] === 'p')
    content.excerpt = firstParagraph
      ? toText((firstParagraph as MinimarkElement).slice(2) as MinimarkNode[])
      : undefined

    const firstImg = children.find(c => isElement(c) && c[0] === 'img')
    content.coverImage = firstImg
      ? ((firstImg as MinimarkElement)[1] as Record<string, unknown>)?.src as string | undefined
      : undefined

    return content
  }
})
