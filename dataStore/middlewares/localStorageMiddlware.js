import { createListenerMiddleware } from "@reduxjs/toolkit";
import { initialState, setLanguage } from "../feature/SettingsSlicer";

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

export const settingState =
  typeof window !== "undefined" && localStorage.getItem("settings") ? JSON.parse(localStorage.getItem("settings")) : initialState;
