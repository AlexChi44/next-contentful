// components/content/TextBlock.tsx
import { PageContent } from '@/lib/contentful'

export default function TextBlock({ content }: PageContent) {
  console.log(content, 'fields !!!!!!!')
  return <p className='text-lg mt-10'>{content}</p>
}
