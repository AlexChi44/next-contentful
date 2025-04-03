import { createClient } from 'contentful'

// const orig = {
//   systemTitle: 'Home',
//   slug: 'home',
//   fullPath: 'home',
//   type: 'Home',
//   body: [
//     {
//       systemTitle: 'Test hero',
//       image: [Object],
//       layout: 'default',
//       eyebrow: 'Eyebrow',
//       heading: 'Welcome to the bar',
//       body: 'Lorem ipsum dolor sit amet consectetur. Tortor arcu facilisi luctus id quam mauris quis cursus cursus aliquet viverra pretium.',
//       ctaLinks: [Array],
//       themeVariant: 'highlights',
//       sysType: 'componentHero',
//       sysId: '68LdQipSHoLtvSkAEtrF5k'
//     }
//   ],
//   published: true,
//   metadata: {
//     seoTitle: 'Homepage UK',
//     seoDescription: 'Test Page for testing',
//     seoSiteName: 'Homepage name UK',
//     seoImage: {
//       title: 'Test Image',
//       description: 'Test Image',
//       file: [Object],
//       sysType: 'Asset',
//       sysId: '1FzISBaC4Xz6yKAURfJpAU'
//     },
//     canonicalUrl: 'homepage',
//     noIndex: true,
//     noFollow: true,
//     noSnippet: true,
//     sysType: 'dataMetadata',
//     sysId: '2Tnrjzw3j8gYTxScGM8KEV'
//   },
//   metaTitle: 'Home',
//   metaDescription: 'Home page',
//   sys: {
//     space: { sys: [Object] },
//     id: 'uMf7kww9SujG3CAx1X0xB',
//     type: 'Entry',
//     createdAt: '2025-03-06T11:46:58.387Z',
//     updatedAt: '2025-04-02T08:11:12.684Z',
//     environment: { sys: [Object] },
//     publishedVersion: 33,
//     revision: 14,
//     contentType: { sys: [Object] },
//     locale: 'en-GB'
//   },
//   sysId: 'uMf7kww9SujG3CAx1X0xB',
//   sysType: 'page'
// }

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
})

export type PageContent = {
  sys: { id: string; contentType: { sys: { id: string } } }
  fields: unknown
}

export type Page = {
  slug: string
  type: string
  body: PageContent[]
}

export const getPageBySlug = async (
  slug: string
): Promise<Page | undefined> => {
  const pages: Page[] = [
    {
      slug: 'home',
      type: 'Home',
      body: [
        {
          sys: { id: '1', contentType: { sys: { id: 'textBlock' } } },
          fields: { text: 'Welcome to our site!' }
        },
        {
          sys: { id: '2', contentType: { sys: { id: 'imageBlock' } } },
          fields: { src: 'https://via.placeholder.com/300', alt: 'Placeholder' }
        }
      ]
    },
    {
      slug: 'the-global-bar-page',
      type: 'General',
      body: [
        {
          sys: { id: '3', contentType: { sys: { id: 'textBlock' } } },
          fields: { text: 'This is the about page.' }
        }
      ]
    }
  ]

  return pages.find(page => page.slug === slug)
}

export async function getBySlug(slug, type, locale = 'af') {
  const entries = await client.getEntries({
    content_type: type,
    'fields.slug': slug,
    locale,
    include: 2 // depth of nesting levels !
  })
  console.log(entries, 'entries get by slug')
  const { fields, sys } = entries.items[0]

  return {
    slug: fields.slug,
    type: sys.type,
    body: Object.entries(fields).map(([key, value], i) => ({
      content: value,
      sys: key,
      id: key + i
    }))
  }
}

export const getPageSlugs = async (): Promise<string[]> => {
  return ['home', 'about']
}
