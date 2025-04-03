export default function PostsLoading() {
  return (
    <div className='animate-pulse'>
      {/* Grid or list container for the posts */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        {/* Repeat skeleton cards for multiple posts (e.g., 2 cards for now) */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className='bg-white p-4 rounded-lg shadow-md'>
            {/* Image placeholder */}
            <div className='bg-gray-200 h-48 w-full rounded-md'></div>

            {/* Date placeholder */}
            <div className='mt-4 bg-gray-200 h-4 w-1/4 rounded-md'></div>

            {/* Title placeholder */}
            <div className='mt-2 bg-gray-200 h-6 w-3/4 rounded-md'></div>

            {/* Summary text placeholders (3 lines) */}
            <div className='mt-3 space-y-2'>
              <div className='bg-gray-200 h-4 w-full rounded-md'></div>
              <div className='bg-gray-200 h-4 w-5/6 rounded-md'></div>
              <div className='bg-gray-200 h-4 w-4/5 rounded-md'></div>
            </div>

            {/* Author section */}
            <div className='mt-4 flex items-center space-x-3'>
              {/* Avatar placeholder */}
              <div className='bg-gray-200 h-10 w-10 rounded-full'></div>
              {/* Author name placeholder */}
              <div className='bg-gray-200 h-4 w-1/3 rounded-md'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
