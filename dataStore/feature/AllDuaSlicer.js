import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {
    error: false,
    result: {},
  },
};

export const allDuaSlicer = createSlice({
  name: "allDuas",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setData: (state, action) => {
      const Duas = [...action.payload.result].filter((item) => item[action.payload.language] != null);

      const sortedData =
        Duas.length > 0 &&
        Duas.sort((a, b) => {
          return a[action.payload.language].localeCompare(b[action.payload.language]);
        });
      const categorized = {};
      sortedData &&
        sortedData.forEach((dua) => {
          if (!(dua[action.payload.language][0] in categorized)) {
            categorized[dua[action.payload.language][0]] = [dua];
          } else {
            categorized[dua[action.payload.language][0]].push(dua);
          }
        });

      state.data.result = categorized;
      state.loading = false;
    },
  },
});

export const { setLoading, setData } = allDuaSlicer.actions;

export default allDuaSlicer.reducer;
