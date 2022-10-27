import { useEffect, useState } from "react";
import SubCatList from "./SubcatList";
import SubCatApi from "../../../dataStore/api/SubCatApi";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const CatList = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const language = useSelector((state) => state.settings.language) || "en";
  const router = useRouter();

  const handleClick = (e) => {
    e && e.preventDefault();
    if (!isOpen) {
      SubCatApi.getSubCategory(props.catId);
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (router.query.cat_id === props.catId.toString()) {
      handleClick();
      document.getElementById(props.catId).scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(true);
    }
  }, [router.query.cat_id, props.catId]);

  return (
    <div className="group" id={props.catId}>
      <a href="/#" onClick={handleClick}>
        <div className="bg-red-100 flex justify-between items-center mx-3 dark:bg-transparent">
          <div className="flex flex-row justify-between items-center w-full h-18 px-3   ">
            <div className="flex flex-row items-center">
              <div className="text-left ml-4">
                <p className="text-title font-inter font-medium text-base ">{props.catName}</p>
                <p className="text-mute-grey text-xs mt-1 ">
                  {language === "en" ? "Subcategory" : "সাব ক্যাটেগোরি"}: {props.subCat}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
      {isOpen && <SubCatList catId={props.catId} />}
    </div>
  );
};

export default CatList;
