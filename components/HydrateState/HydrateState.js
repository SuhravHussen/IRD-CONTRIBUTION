import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBookmarkFromLocalStorage } from "../../dataStore/feature/BookmarkSlicer";
import { addLastRead } from "../../dataStore/feature/LastReadSlicer";
import { updateFromLocalStorage } from "../../dataStore/feature/MemorizeSlicer";
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
import { bookmarksState } from "../../dataStore/middlewares/localsorageMiddleware/Bookmarks/bookmarksMiddleware";
import { getLastReadState } from "../../dataStore/middlewares/localsorageMiddleware/Lastread/LastReadMiddleware";
import { plansState } from "../../dataStore/middlewares/localsorageMiddleware/PlansMiddleware/PlansMiddleware";
import { settingState } from "../../dataStore/middlewares/localsorageMiddleware/SettingsMiddleware/settingsMiddleware";

export default function HydrateState() {
  const dispatch = useDispatch();

  // hydrate saved state from local storage
  useEffect(() => {
    const state = settingState();
    const plans = plansState();
    const bookmarks = bookmarksState();
    const lastRead = getLastReadState();

    dispatch(setLanguage(state?.language));
    dispatch(setShowArabic(state?.showArabic));
    dispatch(setTranslation(state?.showTranslation));
    dispatch(setReference(state?.showReference));
    dispatch(setTransliteration(state?.showTransliteration));
    dispatch(setFontSize(state?.translationFontSize));
    dispatch(setArabicFont(state?.arabicFont));
    dispatch(setArabicFontSize(state?.arabicFontSize));
    dispatch(updateBookmarkFromLocalStorage(bookmarks));
    if (plans && plans.plans.length) {
      dispatch(
        updateFromLocalStorage({
          forLocalStorage: plans.plans,
        })
      );
    }
    if (lastRead) {
      dispatch(addLastRead(lastRead.lastRead));
    }
  }, []);
  return <></>;
}
