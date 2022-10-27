import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastRead: null,
};

export const lastReadSlicer = createSlice({
  name: "lastReadController",
  initialState,
  reducers: {
    addLastRead: (state, action) => {
      state.lastRead = action.payload;
    },
  },
});

export const { addLastRead } = lastReadSlicer.actions;

export default lastReadSlicer.reducer;
