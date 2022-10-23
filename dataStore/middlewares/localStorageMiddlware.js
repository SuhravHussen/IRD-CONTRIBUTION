import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addPlan, deleteDua, editPlan, initialState as plansInitialState, updateCompleted } from "../feature/MemorizeSlicer";
import {
  initialState as initialSettingsState,
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

localStorageMiddleware.startListening({
  actionCreator: addPlan,
  effect: (action, api) => {
    localStorage.setItem(
      "plans",
      JSON.stringify({
        plans: api.getState().memorize.plans,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: editPlan,
  effect: (action, api) => {
    localStorage.setItem(
      "plans",
      JSON.stringify({
        plans: api.getState().memorize.plans,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: updateCompleted,
  effect: (action, api) => {
    localStorage.setItem(
      "plans",
      JSON.stringify({
        plans: api.getState().memorize.plans,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: deleteDua,
  effect: (action, api) => {
    localStorage.setItem(
      "plans",
      JSON.stringify({
        plans: api.getState().memorize.plans,
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
    return initialSettingsState;
  }
};

// get plans state from local storage

export const plansState = () => {
  const plans = JSON.parse(localStorage.getItem("plans"));
  if (plans && plans?.plans) {
    return plans;
  } else {
    return null;
  }
};
