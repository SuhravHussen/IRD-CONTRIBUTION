import React from "react";
import NumCard from "../Utils/NumCard";

export default function SortedDuas({ letter, duas, setModalShow, duaName }) {
  return (
    <div id={letter}>
      <button
        type="button"
        onClick={() => setModalShow(true)}
        className="text-black bg-blue-400 font-medium leading-tight uppercase  transition duration-150 ease-in-out  h-11 w-11   text-lg flex justify-center items-center xs:mt-0 md:mt-5 lg:mt-5">
        {letter}
      </button>
      <div
        className="grid grid-cols-3 my-8 gap-x-7 gap-y-4 xs:grid-cols-1 xs:gap-y-3 xs:m-0 xs:mt-4  
        sm:grid-cols-1 
        sm:gap-x-4
        md:grid-cols-2
        md:gap-x-4
        lg:grid-cols-2
        lg:gap-x-4">
        {duas.map((dua) => (
          <NumCard key={dua.id} link={`/dua/${dua.cat_id}/${dua.subcat_id}#${dua.id}`} title={dua[duaName]} text={letter} />
        ))}
      </div>
    </div>
  );
}
