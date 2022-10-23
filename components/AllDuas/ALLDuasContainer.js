import React from "react";

export default function AllDuasContainer({ children }) {
  return (
    <div
      className="animate-fade-in-up scrl h-[calc(100vh_-_100px)]
      xs:pb-16 sm:pb-8 md:pb-4 md:pt-20 lg:pt-20 lg:pb-6 xl:pb-16 2xl:pb-16 3xl:pb-16
      ">
      {children}
    </div>
  );
}
