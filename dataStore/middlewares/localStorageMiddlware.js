import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  initialState,
  setLanguage,
  setReference,
  setShowArabic,
  setTranslation,
  setTransliteration,
  setFontSize,
  setArabicFont,
  setArabicFontSize,
} from "../feature/SettingsSlicer";

export const localStorageMiddleware = createListenerMiddleware();
localStorageMiddleware.startListening({
  actionCreator: setLanguage,
  effect: (action, api) => {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        ...api.getState().settings,
        language: action.payload,
      })
    );
  },
});
localStorageMiddleware.startListening({
  actionCreator: setShowArabic,
  effect: (action, api) => {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        ...api.getState().settings,
        showArabic: action.payload,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: setTranslation,
  effect: (action, api) => {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        ...api.getState().settings,
        showTranslation: action.payload,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: setReference,
  effect: (action, api) => {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        ...api.getState().settings,
        showReference: action.payload,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: setTransliteration,
  effect: (action, api) => {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        ...api.getState().settings,
        showTransliteration: action.payload,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: setFontSize,
  effect: (action, api) => {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        ...api.getState().settings,
        translationFontSize: action.payload,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: setArabicFont,
  effect: (action, api) => {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        ...api.getState().settings,
        arabicFont: action.payload,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: setArabicFontSize,
  effect: (action, api) => {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        ...api.getState().settings,
        arabicFontSize: action.payload,
      })
    );
  },
});

export const settingState =
  typeof window !== "undefined" && localStorage.getItem("settings") ? JSON.parse(localStorage.getItem("settings")) : initialState;
