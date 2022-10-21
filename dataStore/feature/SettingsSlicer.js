import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  language: "en",
};

export const subCatSlicer = createSlice({
  name: "subCatController",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = subCatSlicer.actions;

export default subCatSlicer.reducer;
