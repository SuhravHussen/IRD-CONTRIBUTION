import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  loading: false,
  data: [],
  ruqyahSubCatId: undefined,
};

export const RuqyahSubCatSlicer = createSlice({
  name: "ruqyahSubCatController",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },

    setRuqyahSubCatId: (state, action) => {
      state.ruqyahSubCatId = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setData, setRuqyahSubCatId, setError } = RuqyahSubCatSlicer.actions;

export default RuqyahSubCatSlicer.reducer;
