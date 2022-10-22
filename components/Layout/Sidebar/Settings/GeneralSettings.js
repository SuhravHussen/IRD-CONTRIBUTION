import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReference, setShowArabic, setTranslation, setTransliteration } from "../../../../dataStore/feature/SettingsSlicer";

const GeneralSettings = () => {
  const { showArabic, showTranslation, showTransliteration, showReference } = useSelector((state) => state.settings);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col py-2 px-4  animate-scale-down">
      <CheckboxList onClick={() => dispatch(setShowArabic(!showArabic))} state={showArabic} name="Show Arabic" />
      <CheckboxList onClick={() => dispatch(setTranslation(!showTranslation))} state={showTranslation} name="Show Translation" />
      <CheckboxList onClick={() => dispatch(setTransliteration(!showTransliteration))} state={showTransliteration} name="Show Transliteration" />
      <CheckboxList onClick={() => dispatch(setReference(!showReference))} state={showReference} name="Show Refference" />
    </div>
  );
};

export default GeneralSettings;

function CheckboxList(props) {
  return (
    <div onClick={() => props.onClick()} className="flex text-sm py-1 justify-between text-title flex-row gap-x-3   cursor-pointer">
      <p>{props.name}</p>
      <div
        className={`w-5 h-5 flex items-center justify-center  ${
          props.state ? "bg-blue-400 transition duration-150 delay-75" : "border-solid border-[2px] border-black  transition duration-150 delay-75"
        }`}>
        {props.state && (
          <svg width="12" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L5 11L15 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        )}
      </div>
    </div>
  );
}
