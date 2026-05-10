import { queryCollection } from '@nuxt/content/server'
import { useRuntimeConfig, defineEventHandler } from '#imports'
import RSS from 'rss';

export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig()

  // Determine the absolute URL the page is served under
  //
  // For production, Netlify provides environment variables, see
  // https://docs.netlify.com/configure-builds/environment-variables/
  // Use the URL here directly instead of setting cdnURL in the runtime config
  // in order to avoid absolute links for all JS/CSS resources, which then cause
  // CORS issues to be resolved.
  // (If we ever want to set cdnURL, refer to https://github.com/nuxt/nuxt/issues/20950#issuecomment-1554378899
  // for the correct HTTP headers.)
  //
  // TODO: Figure out a way to get the development preview URL in here.
  // See https://github.com/nuxt/nuxt/issues/21970
  const endpointUrl = process.env.DEPLOY_PRIME_URL || 'http://localhost:3000'
  const base = endpointUrl + config.app.baseURL

  const feed = new RSS({
    title: "FOSSi Foundation news",
    site_url: endpointUrl,
    feed_url: `${base}feed.xml`,
    generator: "FOSSi Foundation website",
  });

  const blogPosts = await queryCollection(event, 'content')
    .where('path', 'LIKE', '/blog/%')
    .where('path', '<>', '/blog')
    .order('date', 'DESC')
    .all()

  for (const blogPost of blogPosts) {
    feed.item({
      title: blogPost.title ?? '-',
      url: `${endpointUrl}${blogPost.path}`,
      date: blogPost.date,
      description: blogPost.description,
    });
  }

  const feedString = feed.xml({ indent: true });
  setResponseHeader(event, 'content-type', 'text/xml');
  return feedString;
});
