import {
  fetchEntries,
  getAllPostSlugs,
  getPostBySlug
} from '@/app/lib/contentful/client'
import PostCard from '@/app/components/post/PostCard'

const Posts = async ({ searchParams }) => {
  const { lang } = await searchParams
  const posts = await fetchEntries({ content_type: 'post', locale: lang }) // af
  const bySlug = await getPostBySlug('my-second-blog-post')
  const allSlug = await getAllPostSlugs()

  console.log(bySlug, allSlug, 'byslug allslug!!!!!!!!!!!!!!!!!!!!!!!!!')
  return (
    <section className='py-12 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
          {posts.map(post => (
            <PostCard key={post.sys.id} post={post} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Posts
