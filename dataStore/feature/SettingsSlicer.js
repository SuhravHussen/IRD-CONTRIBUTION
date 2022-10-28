import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  language: "en",
  showArabic: true,
  showTranslation: true,
  showReference: true,
  showTransliteration: true,
  translationFontSize: 16,
  arabicFont: "kgfq",
  arabicFontSize: 24,
};

export const subCatSlicer = createSlice({
  name: "subCatController",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setShowArabic: (state, action) => {
      state.showArabic = action.payload;
    },
    setTranslation: (state, action) => {
      state.showTranslation = action.payload;
    },
    setReference: (state, action) => {
      state.showReference = action.payload;
    },
    setTransliteration: (state, action) => {
      state.showTransliteration = action.payload;
    },

    setFontSize: (state, action) => {
      state.translationFontSize = action.payload;
    },
    setArabicFont: (state, action) => {
      if (action.payload === "KGFQ") {
        state.arabicFont = "kgfq";
      } else if (action.payload === "Noor e Huda") {
        state.arabicFont = "noorehuda";
      } else if (action.payload === "Noor E Hedayet") {
        state.arabicFont = "noorehedayet";
      }
    },
    setArabicFontSize: (state, action) => {
      state.arabicFontSize = action.payload;
    },
  },
});

export const { setLanguage, setShowArabic, setTranslation, setReference, setTransliteration, setFontSize, setArabicFont, setArabicFontSize } =
  subCatSlicer.actions;

export default subCatSlicer.reducer;
