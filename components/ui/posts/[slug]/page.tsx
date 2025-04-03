// app/posts/[slug]/page.tsx
import PostBody from '../../components/post/PostBody'
import PostHeader from '../../components/post/PostHeader'
import { fetchEntries } from '../../lib/contentful/client'

// Define the props type for the PostPage component
interface PostPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

type Post = unknown

export default async function PostPage({
  params,
  searchParams
}: PostPageProps) {
  const { slug } = await params
  const { lang } = await searchParams

  // Fetch the post from Contentful
  const response = await fetchEntries({
    content_type: 'post',
    'fields.slug': slug,
    locale: lang
  })

  // Type the response as an array of Post or undefined
  const post: Post | undefined = response?.[0]

  // if (slug === 'af') return null

  return (
    <section className='section'>
      <div className='container'>
        <article className='prose mx-auto'>
          <PostHeader post={post} />
          <PostBody post={post} />
        </article>
      </div>
    </section>
  )
}
