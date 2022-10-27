import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import SingleCategoryCard from "./SingleCategoryCard";

export default function CategoryContainer({ categories, subCategories }) {
  return (
    <div
      className="flex flex-col gap-y-4 overflow-y-scroll scrl "
      style={{
        height: "80vh",
      }}>
      <div className="">Categories</div>
      {categories &&
        categories.map((cat, i) => {
          return (
            <SingleCategoryCard
              catId={cat.cat_id}
              name={`${i + 1}. ${cat.category_name}`}
              subCategories={subCategories.filter((subCat) => subCat.cat_id === cat.cat_id)}
            />
          );
        })}
    </div>
  );
}
