import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'

const PostHeader = ({ post }) => {
  console.log(post, 'post post header')
  const { title, cover, author, dateField } = post.fields

  return (
    <>
      <h2>{title}</h2>
      <div className='hidden md:flex md:justify-between md:items-center md:mb-10'>
        <Avatar
          name={author.fields.name}
          picture={author.fields.picture.fields.file.url}
        />
        <DateComponent
          dateString={dateField}
          className='text-sm text-gray-400'
        />
      </div>
      <div className='hidden sm:block md:block lg:block mb-8 md:mb-16 sm:mx-0'>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={cover.fields.file.url}
          width={cover.fields.file.details.image.width}
          height={cover.fields.file.details.image.height}
        />
      </div>
      <div className='flex justify-between items-center md:hidden mb-6'>
        <Avatar name={author.fields.name} picture={author.fields.picture} />
        <DateComponent
          dateString={dateField}
          className='text-sm text-gray-400'
        />
      </div>
    </>
  )
}

export default PostHeader
