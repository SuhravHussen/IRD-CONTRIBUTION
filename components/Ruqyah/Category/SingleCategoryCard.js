import React, { useEffect } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Collapse } from "react-collapse";
import SingleSubCategory from "./SingleSubCategories";
import { useRouter } from "next/router";

export default function SingleCategoryCard({ catId, name, subCategories }) {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  const categoryId = router.query.cat_id;

  useEffect(() => {
    if (Number(categoryId) === catId && !open) {
      setOpen(true);
      const categoryToScroll = document.getElementById(`${catId}`);
      categoryToScroll.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [categoryId, catId]);

  return (
    <div id={catId} className="cursor-pointer">
      <div
        onClick={() => {
          if (!open) {
            router.push(`/ruqyah/details/${catId}`, undefined, { shallow: true });
          } else {
            setOpen(false);
          }
        }}
        style={{
          width: "90%",
        }}
        className="flex justify-between p-4 pl-2 bg-red-300 rounded-md text-slate-700 items-center">
        <p>{name}</p>
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
      <Collapse isOpened={open}>
        <div className={`divide-y-2 flex flex-col p-4  rounded-md`}>
          {subCategories.map((subCat, i) => {
            return <SingleSubCategory data={subCat} number={i + 1} />;
          })}
        </div>
      </Collapse>
    </div>
  );
}
