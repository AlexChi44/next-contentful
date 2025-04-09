import React from "react";

interface TagProps {
  readonly label: string;
}

function TagTest({ label }: TagProps) {
  // sm:12 md:14 lg:16
  // bodyCopyProps - text-body-xxs
  return (
    <span
      className="
       inline-block rounded-lg shadow font-sans text-body-xxs
         px-2 py-1  sm:px-3 sm:py-1.5  lg:px-4 lg:py-2
        border-none sm:border sm:border-gray-400
      "
    >
      {label}
    </span>
  );
}

export default TagTest;
