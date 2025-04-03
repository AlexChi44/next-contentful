import { ReactNode } from 'react'

export default function LocaleLayout({
  children
}: // params
{
  children: ReactNode
  params: { locale: string }
}) {
  return <section>{children}</section>
}

// Опционально: генерация статических параметров для локалей
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'af' }] // Список поддерживаемых локалей
}
