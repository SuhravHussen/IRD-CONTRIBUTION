import React from "react";

export default function AllDuaSkeleton() {
  return (
    <div role="status" className="animate-pulse  w-100 flex flex-col md:items-center mt-8">
      <div className="h-12 bg-gray-300  dark:bg-gray-700 w-12 mb-4"></div>
      <div className="flex w-full flex-wrap gap-4 justify-between">
        <div className="h-15 bg-gray-300  dark:bg-gray-700 w-1/4 mb-4"></div>
        <div className="h-15 bg-gray-300  dark:bg-gray-700 w-1/4 mb-4"></div>
        <div className="h-15 bg-gray-300  dark:bg-gray-700 w-1/4 mb-4"></div>
        <div className="h-15 bg-gray-300  dark:bg-gray-700 w-1/4 mb-4"></div>
        <div className="h-15 bg-gray-300  dark:bg-gray-700 w-1/4 mb-4"></div>
        <div className="h-15 bg-gray-300  dark:bg-gray-700 w-1/4 mb-4"></div>
        <div className="h-15 bg-gray-300  dark:bg-gray-700 w-1/4 mb-4"></div>
        <div className="h-15 bg-gray-300  dark:bg-gray-700 w-1/4 mb-4"></div>
        <div className="h-15 bg-gray-300  dark:bg-gray-700 w-1/4 mb-4"></div>
      </div>
    </div>
  );
}
