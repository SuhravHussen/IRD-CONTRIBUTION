import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const RuqyahDetailsSlicer = createSlice({
  name: "ruqyahDetailsSlicerController",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setData, setError } = RuqyahDetailsSlicer.actions;

export default RuqyahDetailsSlicer.reducer;
