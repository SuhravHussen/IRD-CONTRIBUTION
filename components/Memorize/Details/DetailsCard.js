import { useSelector } from "react-redux";
import Botombar from "./Botombar";
import TopBar from "./TopBar";

const DetailsCard = ({ details, planId }) => {
  const { language } = useSelector((state) => state.settings);
  const duaName = language === "en" ? "dua_name_en" : "dua_name_bn";
  const topPart = language === "en" ? "top_en" : "top_bn";
  const translation = language === "en" ? "translation_en" : "translation_bn";
  const transliteration = language === "en" ? "transliteration_en" : "transliteration_bn";
  const reference = language === "en" ? "refference_en" : "refference_bn";
  return (
    <div className="bg-red-100 rounded-2lg mb-5 dark:bg-[#223449]">
      <div className="p-6">
        <TopBar planId={planId} title={details[duaName]} dua={details} />
        <div className="flex flex-col justify-start items-start">
          {/* Body */}
          <p className="my-5 text-title text-justify font-inter font-normal ">{details[topPart]}</p>
          {/* Arabic */}
          <p className="my-5 text-title text-right leading-loose font-kgfq text-3xl ">{details?.dua_arabic}</p>
          {/* transliteration */}
          <p className="my-5 text-title text-justify font-inter font-normal ">{details[transliteration]}</p>
          {/* Translation */}
          <p className="my-5 text-title text-justify font-inter font-normal ">{details[translation]}</p>
          <p className="mt-2 font-inter font-normal text-base ">Reference</p>
          <p className="mt-1 font-inter font-normal text-base text-title ">{details[reference]}</p>
        </div>
      </div>
      <Botombar />
    </div>
  );
};

export default DetailsCard;
