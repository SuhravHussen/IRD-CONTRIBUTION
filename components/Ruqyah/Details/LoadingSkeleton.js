import React from "react";

export default function LoadingSkeleton() {
  return (
    <>
      <div class="hidden  xl-min:flex flex-col gap-y-3  w-3/5 " role="status">
        <div class="flex justify-center items-center w-full h-10 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
        <div class="flex justify-center items-center w-full h-10 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
        <div class="flex justify-center items-center w-full h-10 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
        <div class="flex justify-center items-center w-full h-10 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
        <div class="flex justify-center items-center w-full h-10 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
        <div class="flex justify-center items-center w-full h-10 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
        <div class="flex justify-center items-center w-full h-10 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
        <div class="flex justify-center items-center w-full h-10 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
      </div>
      <div class="flex flex-col gap-y-3 w-4/5 justify-center">
        <div class="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
        <div class="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
        <div class="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
        <div class="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
        <div class="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-5" />
      </div>
    </>
  );
}
