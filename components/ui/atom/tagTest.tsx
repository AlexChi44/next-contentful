import React from 'react'

interface TagProps {
  readonly label: string
}

function TagTest({ label }: TagProps) {
  // sm:12 md:14 lg:16
  // xs- 12, sm-14, md - 15 lg16
  return (
    <span
      className='
        bg-customPurple inline-block rounded-lg shadow-sm font-sans
        text-xs px-2 py-1 sm:text-sm sm:px-3 sm:py-1.5 md:text-[15px] lg:text-base lg:px-4 lg:py-2
        border-none sm:border sm:border-gray-400
      '
    >
      {label}
    </span>
  )
}

export default TagTest
