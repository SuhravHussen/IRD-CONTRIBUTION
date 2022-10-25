import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import Botombar from "./Botombar";
import TopBar from "./TopBar";

const DetailsCard = ({ dua, query, ref = "" }) => {
  const language = useSelector((state) => state.settings.language);

  const duaName = language === "en" ? "dua_name_en" : "dua_name_bn";
  const transliteration = language === "en" ? "transliteration_en" : "transliteration_bn";
  const translation = language === "en" ? "translation_en" : "translation_bn";
  const reference = language === "en" ? "refference_en" : "refference_bn";
  const top = language === "en" ? "top_en" : "top_bn";
  const bottom = language === "en" ? "bottom_en" : "bottom_bn";

  const [matchedTop, setMatchedTop] = useState([]);
  const [matchedBottom, setMatchedBottom] = useState([]);
  const [matchedtranslation, setMatchedTranslation] = useState([]);
  const [matchedTransliteration, setMatchedTransliteration] = useState([]);
  const [matchedReference, setMatchedReference] = useState([]);

  function boldText(input, text) {
    if (!input || !text) return "";
    const regex = new RegExp(`(${text})`, "ig");

    let output = input.replace(regex, `<b>$1</b>`);

    return output;
  }

  useEffect(() => {
    setMatchedTop(boldText(dua[top], query));
    setMatchedBottom(boldText(dua[bottom], query));
    setMatchedTranslation(boldText(dua[translation], query));
    setMatchedTransliteration(boldText(dua[transliteration], query));
    setMatchedReference(boldText(dua[reference], query));
  }, [query, dua, bottom, top, translation, transliteration, reference]);

  const copyElement = useRef(null);
  const copyText = `${dua[top] ?? ""} ${dua[bottom] ?? ""}  ${dua[reference] ?? ""}`;

  return (
    <div className="bg-red-100 rounded-2lg mb-5 " id={dua.id}>
      <input ref={copyElement} type="text" style={{ display: "none" }} value={copyText} />
      <div className="p-6">
        <TopBar duaName={dua.id + ". " + dua[duaName] ?? ""} />
        <div className="flex flex-col justify-start items-start">
          {/* Body */}
          <p
            className="my-5 text-title text-justify font-inter font-normal "
            dangerouslySetInnerHTML={{
              __html: matchedTop,
            }}></p>

          <p className="my-5 text-title text-right leading-loose font-kgfq text-3xl ">{dua.dua_arabic ?? ""}</p>
          {dua[transliteration] && (
            <p
              className="my-5 text-title text-justify font-inter font-normal"
              dangerouslySetInnerHTML={{
                __html: matchedTransliteration,
              }}></p>
          )}
          {dua[translation] && (
            <p className="my-5 text-title text-justify font-inter font-normal " dangerouslySetInnerHTML={{ __html: matchedtranslation }}></p>
          )}
          {dua[bottom] && (
            <p
              className="my-5 text-title text-justify font-inter font-normal"
              dangerouslySetInnerHTML={{
                __html: matchedBottom,
              }}></p>
          )}
          <p className="mt-2 font-inter font-medium text-base ">Reference</p>
          {dua[reference] && (
            <p
              className="mt-1 font-inter font-normal text-base text-title "
              dangerouslySetInnerHTML={{
                __html: matchedReference,
              }}></p>
          )}
        </div>
      </div>
      <Botombar dua={dua} textToCopy={copyText} element={copyElement} />
    </div>
  );
};

export default DetailsCard;
