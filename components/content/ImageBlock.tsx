// components/content/ImageBlock.tsx
'use client'
import { PageContent } from '@/lib/contentful'
import Image, { ImageLoaderProps } from 'next/image'

export default function ImageBlock({ content }: PageContent) {
  const contentfulLoader = ({
    src,
    width,
    quality
  }: ImageLoaderProps): string => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div className='flex gap-10 mt-10'>
      {content.map((field, i) => {
        return (
          <div className='w-80 h-48' key={i}>
            <h3>{field.fields.title}</h3>

            <Image
              src={field.fields.file.url}
              width={500}
              height={500}
              loader={contentfulLoader}
              style={{
                objectFit: 'cover',
                aspectRatio: '16/9' // Forces the aspect ratio
              }}
              alt='Ppost image'
            />
          </div>
        )
      })}
    </div>
  )
}
