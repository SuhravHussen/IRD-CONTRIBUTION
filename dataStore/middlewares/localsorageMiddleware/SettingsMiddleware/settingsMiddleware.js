import {
  setArabicFont,
  setArabicFontSize,
  setFontSize,
  setLanguage,
  setReference,
  setShowArabic,
  setTranslation,
  setTransliteration,
} from "../../../feature/SettingsSlicer";
import { localStorageMiddleware } from "../listner";

import { initialState } from "../../../feature/SettingsSlicer";

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

// get settings state from local storage
export const settingState = () => {
  const settings = localStorage.getItem("settings");
  if (settings) {
    return JSON.parse(settings);
  } else {
    return initialState;
  }
};
