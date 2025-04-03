import { notFound } from 'next/navigation'
import Layout from '@/components/Layout'
import { getBySlug } from '@/lib/contentful'

type PageParams = {
  locale: string
  slug?: string[]
}

export default async function DynamicPage({ params }: { params: PageParams }) {
  const { locale, slug: [slug] = [] } = params

  const getType = (slug: string): string | undefined => {
    return {
      'blogs-page': 'blogsPage',
      'the-global-bar-page': 'testPageGlobalBar'
    }[slug]
  }

  const type = getType(slug)

  if (!type) {
    notFound()
  }

  const pageBySlug = await getBySlug(slug, type, locale)

  return <Layout page={pageBySlug} type={type} />
}

// Генерация статических путей (опционально)
// export async function generateStaticParams({
//   params: { locale }
// }: {
//   params: { locale: string }
// }) {
//   const entries = await client.getEntries<PageContent>({
//     content_type: 'page',
//     locale
//   })
//   return entries.items.map(entry => ({
//     slug: entry.fields.slug ? entry.fields.slug.split('/') : []
//   }))
// }
