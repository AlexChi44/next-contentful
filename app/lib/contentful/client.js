import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function fetchEntries(contentType) {
  const entries = await client.getEntries(contentType)
  return entries.items
}

export async function getPostBySlug(slug, locale = 'af') {
  const entries = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    locale
  })
  return entries.items[0] || null
}

export async function getAllPostSlugs(locale = 'af') {
  const entries = await client.getEntries({
    content_type: 'post',
    locale
  })
  return entries.items.map(item => ({
    slug: item.fields.slug,
    locale
  }))
}
