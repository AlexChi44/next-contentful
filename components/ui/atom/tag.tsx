import React from "react";

interface TagProps {
  readonly label: string;
}

function Tag({ label }: TagProps) {
  // sm:12 md:14 lg:16
  return (
    <span
      className="
        inline-block rounded-lg shadow-sm font-(family-name:--font-play_n)
        text-xs px-2 py-1 sm:text-sm sm:px-3 sm:py-1.5 lg:text-base lg:px-4 lg:py-2
        border-none sm:border sm:border-gray-400
      "
    >
      {label}
    </span>
  );
}

export default Tag;
