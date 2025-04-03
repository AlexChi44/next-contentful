// components/Layout.tsx
import { Page } from '@/lib/contentful'
import { ComponentMapper } from './ComponentMapper'

type PageParams = {
  page: Page
  type: string
}

type LayoutProps = {
  page: Page
}

export default function Layout({ page, type }: PageParams) {
  const Layouts = {
    blogsPage: BlogsLayout,
    testPageGlobalBar: GlobalBarLayout
  }

  const SelectedLayout = Layouts[type] || GlobalBarLayout

  return <SelectedLayout page={page} />
}

function BlogsLayout({ page }: LayoutProps) {
  return (
    <section className='py-12 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div>Blogs Layout</div>
        <ComponentMapper page={page} />
      </div>
    </section>
  )
}

function GlobalBarLayout({ page }: LayoutProps) {
  return (
    <div className='p-10'>
      <ComponentMapper page={page} />
    </div>
  )
}
