import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DuaBottomBar from "./DuaBottomBar";
import DuaTopbar from "./DuaTopbar";

const DuaCard = ({ dua }) => {
  const [animation, setAnimation] = useState(false);
  const { showArabic, showTranslation, showReference, showTransliteration, language, translationFontSize, arabicFont, arabicFontSize } = useSelector(
    (state) => state.settings
  );

  console.log(arabicFont);
  useEffect(() => {
    return () => {
      setAnimation(true);
    };
  }, [dua[0].dua_id, showArabic, showTranslation, showReference, showTransliteration, language, translationFontSize, arabicFont, arabicFontSize]);

  const body = language === "en" ? "top_en" : "top_bn";

  return (
    <div id={`${dua[0].dua_id}`} className="bg-red-100 rounded-2lg my-5 dark:bg-[#223449]">
      <div className="p-6">
        <DuaTopbar lang={language} duaName={language === "en" ? dua[0].dua_name_en : dua[0].dua_name_bn} duaId={dua[0].dua_id} />
        <div className={`flex flex-col justify-start items-start  ${animation && "animate-fade-in-up"}`}>
          {dua.map(function (item, index) {
            return (
              <div className="w-full">
                {/* Body */}
                {dua[index].top_en && dua[index].top_bn !== null && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">{dua[index][body]}</p>
                )}
                {/* Arabic */}

                {dua[index].dua_arabic !== null && showArabic && (
                  <p
                    style={{
                      fontSize: arabicFontSize + "px",
                    }}
                    className={`my-5 text-title text-right leading-loose font-${arabicFont}`}>
                    {dua[index].dua_arabic}
                  </p>
                )}
                {/* transliteration_en */}

                {dua[index].transliteration_en !== null && showTransliteration && language === "en" && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">{dua[index].transliteration_en}</p>
                )}
                {dua[index].transliteration_bn !== null && showTransliteration && language === "bn" && (
                  <p className=" my-5 text-title text-justify font-kgfq font-normal">{dua[index].transliteration_bn}</p>
                )}

                {/* translation_en */}
                {dua[index].translation_en !== null && showTranslation && language === "en" && (
                  <p
                    style={{
                      fontSize: translationFontSize + "px",
                    }}
                    className=" my-5 text-title text-justify font-inter font-normal">
                    {dua[index].translation_en}
                  </p>
                )}
                {dua[index].translation_bn !== null && showTranslation && language === "bn" && (
                  <p
                    style={{
                      fontSize: translationFontSize + "px",
                    }}
                    className=" my-5 text-title text-justify font-inter font-normal">
                    {dua[index].translation_bn}
                  </p>
                )}
                {/* Dua Bottom Section */}
                {dua[index].bottom_en !== null && <p className=" my-5 text-title text-justify font-inter font-normal">{dua[index].bottom_en}</p>}

                {dua.length > 1 && index !== dua.length - 1 && <div className="bg-devider h-[1px] dark:bg-[#2F4B5F]" />}
              </div>
            );
          })}

          {showReference && (
            <div>
              <p className="mt-2 ">Reference</p>
              <div className="mt-1 text-sm text-title  w-full text-left">{dua[dua.length - 1].refference_en}</div>
            </div>
          )}
        </div>
      </div>
      <DuaBottomBar audio={dua[0].audio} />
    </div>
  );
};

export default DuaCard;
