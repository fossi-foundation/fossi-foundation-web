/**
 * Composable for setting SEO meta tags with automatic image URL resolution.
 *
 * This composable simplifies the addition of SEO-related meta tags (OpenGraph, Twitter cards, etc.)
 * by automatically making image URLs absolute and extracting the first image from content if needed.
 *
 * @see https://github.com/fossi-foundation/fossi-foundation-web/issues/49
 * @see https://content.nuxt.com/composables/use-content-head
 * @see https://github.com/nuxt/content/issues/2373
 */

/**
 * The base URL for the site, used to make relative URLs absolute.
 */
const SITE_URL = 'https://www.fossi-foundation.org'

/**
 * Default fallback image for pages without a specified image.
 * Note: For best results, use images at least 1200x630 pixels.
 */
const DEFAULT_OG_IMAGE = '/images/ecl-logo-small.jpg'

interface SeoMetaOptions {
  /**
   * Page title
   */
  title?: string
  /**
   * Page description
   */
  description?: string
  /**
   * Image URL (can be relative or absolute)
   */
  image?: string | { src?: string; alt?: string }
  /**
   * Page URL path (relative)
   */
  path?: string
  /**
   * Article author (for blog posts)
   */
  author?: string
  /**
   * Article published date (for blog posts)
   */
  date?: string | Date
  /**
   * OpenGraph type (default: 'website')
   */
  type?: 'website' | 'article'
}

/**
 * Converts a relative URL to an absolute URL using the site's base URL.
 */
function toAbsoluteUrl(url: string | undefined): string | undefined {
  if (!url) return undefined
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  // Ensure the URL starts with a forward slash
  const normalizedUrl = url.startsWith('/') ? url : `/${url}`
  return `${SITE_URL}${normalizedUrl}`
}

/**
 * Extracts the first image URL from markdown content body.
 * Searches through the parsed content tree for image nodes.
 */
function extractFirstImageFromContent(body: any): string | undefined {
  if (!body || !body.children) return undefined

  // Recursive function to find first image in content tree
  function findImage(node: any): string | undefined {
    if (!node) return undefined

    // Check if this node is an image
    if (node.tag === 'img' && node.props?.src) {
      return node.props.src
    }

    // Check children recursively
    if (node.children && Array.isArray(node.children)) {
      for (const child of node.children) {
        const found = findImage(child)
        if (found) return found
      }
    }

    return undefined
  }

  return findImage(body)
}

/**
 * Sets SEO meta tags for the current page.
 *
 * @param options - SEO meta options
 *
 * @example
 * ```ts
 * // In a page or component
 * useSeoMetaTags({
 *   title: 'My Page Title',
 *   description: 'A description of my page',
 *   image: '/images/my-image.jpg'
 * })
 * ```
 */
export function useSeoMetaTags(options: SeoMetaOptions) {
  // Extract image URL from options
  let imageUrl: string | undefined
  if (typeof options.image === 'string') {
    imageUrl = options.image
  } else if (options.image?.src) {
    imageUrl = options.image.src
  }

  // Make image URL absolute
  const absoluteImageUrl = toAbsoluteUrl(imageUrl) || toAbsoluteUrl(DEFAULT_OG_IMAGE)
  const absolutePageUrl = options.path ? toAbsoluteUrl(options.path) : undefined

  // Build the meta object
  const metaConfig: Record<string, string | undefined> = {
    title: options.title,
    description: options.description,
    // OpenGraph tags
    ogTitle: options.title,
    ogDescription: options.description,
    ogImage: absoluteImageUrl,
    ogUrl: absolutePageUrl,
    ogType: options.type || 'website',
    // Twitter Card tags
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: absoluteImageUrl,
  }

  // Add article-specific meta tags for blog posts
  if (options.type === 'article') {
    if (options.author) {
      metaConfig.articleAuthor = options.author
    }
    if (options.date) {
      metaConfig.articlePublishedTime = typeof options.date === 'string'
        ? options.date
        : options.date.toISOString()
    }
  }

  // Use Nuxt's useSeoMeta composable
  useSeoMeta(metaConfig as any)
}

/**
 * Sets SEO meta tags from a Nuxt Content document.
 * Automatically extracts the first image from content if no image is specified.
 *
 * @param document - The Nuxt Content document
 *
 * @example
 * ```ts
 * // In a page using Nuxt Content
 * const { data: page } = await useAsyncData('my-page', () => queryContent('/my-page').findOne())
 * useSeoMetaFromContent(page.value)
 * ```
 */
export function useSeoMetaFromContent(document: any) {
  if (!document) return

  // Try to get image from frontmatter, or extract first image from content
  let image = document.image
  if (!image && document.body) {
    const firstImage = extractFirstImageFromContent(document.body)
    if (firstImage) {
      image = firstImage
    }
  }

  // Determine if this is an article (blog post)
  const isArticle = document.layout === 'post' || document._path?.startsWith('/blog/')

  useSeoMetaTags({
    title: document.title,
    description: document.description,
    image,
    path: document._path,
    author: document.author,
    date: document.date,
    type: isArticle ? 'article' : 'website',
  })
}
