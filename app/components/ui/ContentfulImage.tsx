'use client'
import Image, { ImageLoaderProps, ImageProps } from 'next/image'

// Contentful Loader Function
const contentfulLoader = ({
  src,
  width,
  quality
}: ImageLoaderProps): string => {
  return `${src}?w=${width}&q=${quality || 75}`
}

// ContentfulImage Component
const ContentfulImage: React.FC<ImageProps> = props => {
  return (
    <Image
      {...props}
      loader={contentfulLoader}
      // style={{
      //   objectFit: 'cover',
      //   aspectRatio: '16/9' // Forces the aspect ratio
      // }}
      alt='Ppost image'
    />
  )
}

export default ContentfulImage
