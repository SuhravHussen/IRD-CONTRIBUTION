import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const bookMarkSlicer = createSlice({
  name: "bookMarkController",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.push({
        ...action.payload,
        id: uid(),
      });
    },
    editBookmark: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteBookmark: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index > -1 && index <= state.length) state.splice(index, 1);
    },
    updateBookmarkFromLocalStorage: (state, action) => {
      if (action.payload) return action.payload;
    },
  },
});

export const { addBookmark, editBookmark, deleteBookmark, updateBookmarkFromLocalStorage } = bookMarkSlicer.actions;

export default bookMarkSlicer.reducer;

// generate id
const uid = () => String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
