import Link from 'next/link'
import Avatar from '../ui/Avatar'
import DateComponent from '../ui/DateComponent'
import ContentfulImage from '../ui/ContentfulImage'
import Tag from '@/components/ui/atom/tag'
import TagTest from '@/components/ui/atom/tagTest'

interface PostFields {
  title: string
  slug: string
  excerpt: string
  dateField: string
  cover: {
    fields: {
      file: {
        url: string
        details: {
          image: {
            width: number
            height: number
          }
        }
      }
    }
  }
  author: {
    fields: {
      name: string
      picture: {
        fields: {
          file: {
            url: string
          }
        }
      }
    }
  }
  date: string
}

interface PostProps {
  post: {
    fields: PostFields
  }
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  const { title, slug, excerpt, cover, author, dateField } = post.fields

  return (
    <li className='rounded-md overflow-hidden shadow-md flex flex-col h-full'>
      <Link
        href={`/posts/${slug}`}
        aria-label={title}
        className='flex flex-col h-full'
      >
        <div className='m-3'>
          <Tag label='card-tag' />
          <TagTest label='card-tag-test' />
        </div>
        {/* Изображение с фиксированной высотой и object-fit */}
        <div className='w-full h-48 opacity-10 sm:opacity-50 md:opacity-70 lg:opacity-90'>
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={cover.fields.file.url}
            width={cover.fields.file.details.image.width}
            height={cover.fields.file.details.image.height}
            className='w-full h-full object-cover'
          />
        </div>
        {/* Контент карточки */}
        <div className='p-4 flex flex-col flex-grow'>
          {/* Заголовок с ограничением по количеству строк */}
          <h3 className='text-xl mb-1 leading-snug line-clamp-2'>{title}</h3>
          {/* Дата */}
          <div className='text-sm mb-4 text-gray-400'>
            <DateComponent dateString={dateField} />
          </div>
          {/* Описание с обрезкой текста */}
          <p className='text-base mb-4 line-clamp-3 flex-grow'>{excerpt}</p>
          {/* Аватар внизу */}
          <div className='mt-auto'>
            <Avatar
              name={author.fields?.name || 'name is not defined'}
              picture={
                author.fields?.picture?.fields?.file?.url ||
                'autor picture absence'
              }
            />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PostCard
