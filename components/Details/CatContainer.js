import SearchIcon from "../../assets/searchIcon";
import CatList from "./CategoryList/CatList";
import { useEffect, useState } from "react";
import SearchBox from "../Widget/SearchBox";

import { useSelector } from "react-redux";

const CatContainer = ({ ns, title, hidden = "xs:hidden sm:hidden md:hidden lg:hidden" }) => {
  const [search, setSearch] = useState(false);
  const [categories, setCategories] = useState([]);
  const data = useSelector((state) => state.duaCat.data);
  const language = useSelector((state) => state.settings.language);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  useEffect(() => {
    setCategories(data?.result);
  }, [data]);

  return (
    <div className={`h-[85.5vh] overflow-hidden bg-red-100 rounded-2lg  dark:bg-[#223449] ${hidden} xs:h-[100vh] sm:h-[50vh]`}>
      <div className="rounded-t-2lg  justify-center items-center h-14 flex flex-row px-5">
        {search && <img onClick={handleSearch} src="/assets/leftarrow.svg" alt="" />}
        <p className="text-sm text-black w-50 mx-auto">{title}</p>
        <button onClick={handleSearch}>
          <SearchIcon height="22" color="stroke-white" />
        </button>
      </div>
      <div className="mt-6 scrl h-[calc(100vh_-_200px)] pb-8 xs:h-[calc(100vh_-_40vh)] sm:h-[calc(100vh_-_40vh)]">
        {search && (
          <div className="mx-3 mt-5">
            <SearchBox hint={`${"Search " + title}`} setCategories={setCategories} />
            <p className=" text-sm mt-4 text-start">Search Results:</p>
          </div>
        )}
        {categories &&
          categories.map((item) => (
            <CatList
              catId={item.cat_id}
              catName={language === "en" ? item.cat_name_en : item.cat_name_bn}
              subCat={language === "en" ? item.no_of_subcat : item.no_of_subcat.toLocaleString("bn")}
              DuaC={language === "en" ? item.no_dua : item.no_of_dua.toLocaleString("bn")}
            />
          ))}
      </div>
    </div>
  );
};

export default CatContainer;
