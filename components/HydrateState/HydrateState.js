import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPlan, updateFromLocalStorage } from "../../dataStore/feature/MemorizeSlicer";
import {
  setArabicFont,
  setArabicFontSize,
  setFontSize,
  setLanguage,
  setReference,
  setShowArabic,
  setTranslation,
  setTransliteration,
} from "../../dataStore/feature/SettingsSlicer";
import { plansState, settingState } from "../../dataStore/middlewares/localStorageMiddlware";

export default function HydrateState() {
  const dispatch = useDispatch();

  let dontUpdateLocalStorage = false;
  // hydrate saved state from local storage
  useEffect(() => {
    const state = settingState();
    const plans = plansState();

    dispatch(setLanguage(state?.language));
    dispatch(setShowArabic(state?.showArabic));
    dispatch(setTranslation(state?.showTranslation));
    dispatch(setReference(state?.showReference));
    dispatch(setTransliteration(state?.showTransliteration));
    dispatch(setFontSize(state?.translationFontSize));
    dispatch(setArabicFont(state?.arabicFont));
    dispatch(setArabicFontSize(state?.arabicFontSize));

    if (plans && plans.plans.length) {
      dispatch(
        updateFromLocalStorage({
          forLocalStorage: plans.plans,
        })
      );
    }
  }, []);
  return <></>;
}
