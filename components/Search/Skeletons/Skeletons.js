import React from "react";

export default function Skeletons() {
  return (
    <div className="flex flex-col ">
      {Array(10)
        .fill()
        .map((_, i) => (
          <div className="h-20 w-full bg-gray-200  dark:bg-gray-700  mb-4"></div>
        ))}
    </div>
  );
}
