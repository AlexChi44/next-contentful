'use client'

import { useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()

  const changeLanguage = (lang: string) => {
    const pathname = window.location.pathname.split('/').filter(Boolean) // Splits and removes empty parts
    const currentLocale = pathname[0] // Assumes the first part of the path is the locale
    const newPathname =
      currentLocale === 'en-US' || currentLocale === 'af'
        ? `/${lang}/${pathname.slice(1).join('/')}` // Replace locale and keep the rest of the path
        : `/${lang}${window.location.pathname}` // Add locale if not already present

    router.push(newPathname, { scroll: false })
  }

  // Current language is detected from the URL (default is 'en-US')
  const currentLang = window.location.pathname.split('/')[1] || 'en-US'

  return (
    <div className='flex justify-between'>
      <button
        onClick={() => changeLanguage('en-US')}
        className={`px-4 py-2 rounded cursor-pointer ${
          currentLang === 'en-US'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('af')}
        className={`px-4 py-2 rounded cursor-pointer ${
          currentLang === 'af'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        Afrikaans
      </button>
    </div>
  )
}
