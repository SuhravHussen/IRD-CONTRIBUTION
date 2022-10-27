import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { useSelector } from "react-redux";

export default function SingleSubCategory({ data, number }) {
  const [open, setOpen] = useState(false);

  const ruqyahDetails = useSelector((state) => state.ruqyahDetails.data);
  const ruqyasOfThisSubCategories = ruqyahDetails.filter((item) => item.subcat_id === data.subcat_id);
  const router = useRouter();

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="p-4 bg-red-100 rounded-t-md flex justify-between ">
        {number}. {data.subcat_name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${open ? "rotate-90 transform" : ""} w-6 h-6 transition-all duration-500`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <div className="mb-3 mt-3">
        <Collapse isOpened={open}>
          {ruqyasOfThisSubCategories.map((ruqya, i) => {
            const name = ruqya.topic_name ? ruqya.topic_name : "Ruqyah of this subcategory" + " " + i + 1;
            return (
              <p
                onClick={() => {
                  router.push(`/ruqyah/details/${data.cat_id}?ruqya=${ruqya.id}`, undefined, { shallow: true });
                }}
                className="p-4 bg-rose-50 opacity-70">
                {i + 1}. {name}
              </p>
            );
          })}
        </Collapse>
      </div>
    </div>
  );
}
