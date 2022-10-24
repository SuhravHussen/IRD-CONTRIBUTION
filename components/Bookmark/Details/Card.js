import { useRef } from "react";
import { useSelector } from "react-redux";
import SingleBotombar from "./Botombar";
import SingleTopBar from "./TopBar";

const Card = ({ dua }) => {
  const language = useSelector((state) => state.settings.language);

  const duaName = language === "en" ? "dua_name_en" : "dua_name_bn";
  const top = language === "en" ? "top_en" : "top_bn";
  const bottom = language === "en" ? "bottom_en" : "bottom_bn";
  const translation = language === "en" ? "translation_en" : "translation_bn";
  const transliteration = language === "en" ? "transliteration_en" : "transliteration_bn";
  const reference = language === "en" ? "refference_en" : "refference_bn";
  const copyText = `${dua?.dua_arabic ?? ""} ${dua?.[transliteration] ?? ""}  ${dua?.[reference] ?? ""}`;
  const copyElement = useRef(null);
  return (
    <div className="bg-red-100 rounded-2lg mb-5 dark:bg-[#223449]">
      <input ref={copyElement} type="text" style={{ display: "none" }} value={copyText} />
      <div className="p-6">
        <SingleTopBar title={dua[duaName]} />
        <div className="flex flex-col justify-start items-start">
          {/* Body */}
          <p className="my-5 text-title text-justify font-inter font-normal ">{dua[top] && dua[top]}</p>
          {/* Arabic */}
          <p className="my-5 text-title text-right leading-loose font-kgfq text-3xl ">{dua.dua_arabic && dua.dua_arabic}</p>
          <p className="my-5 text-title text-justify font-inter font-normal ">{dua[bottom] && dua[bottom]}</p>
          <p className="my-5 text-title text-justify font-inter font-normal ">{dua[transliteration] && dua[transliteration]}</p>
          <p className="my-5 text-title text-justify font-inter font-normal ">{dua[translation] && dua[translation]}</p>
          <p className="mt-2 font-inter font-medium text-base ">Reference</p>
          <p className="mt-1 font-inter font-normal text-base text-title ">{dua[reference] && dua[reference]}</p>
        </div>
      </div>
      <SingleBotombar duaID={dua.id} copyText={copyText} copyElement={copyElement} />
    </div>
  );
};

export default Card;
