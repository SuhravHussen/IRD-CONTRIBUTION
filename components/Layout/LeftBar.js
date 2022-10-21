import { useSelector } from "react-redux";
import CatList from "./LeftBar/CatList.js";
import Footer from "./LeftBar/Footer";

function LeftBar({ ns = false }) {
  const language = useSelector((state) => state.settings.language);

  return (
    <div className={`${ns ? "w-[100px]" : " w-full"} overflow-hidden`}>
      <div className="bg-100  px-4 dark:bg-[#223449] lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh]">
        {/* Logo */}

        <CatList path="/" text={Title(ns, language === "en" ? "Home" : "হোম")} />
        <CatList path="/alldua" text={Title(ns, language === "en" ? "All Duas" : "সকল দোয়া")} />
        <CatList path="/memorize" text={Title(ns, language === "en" ? "Memorize" : "মুখস্ত করুন")} />
        <CatList path="/bookmark" text={Title(ns, language === "en" ? "Bookmark" : "বুকমার্ক")} />
        <CatList path="/ruqyah" text={Title(ns, language === "en" ? "Ruqyah" : "রুকিয়াহ")} />
      </div>
    </div>
  );
}

export default LeftBar;

function Title(ns, title) {
  if (ns === false) {
    return title;
  } else {
    return "";
  }
}
