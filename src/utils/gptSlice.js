import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    language: "en",
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.gptSearch = action.payload;
    },
    toggleLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { toggleGptSearch, toggleLanguage } = gptSlice.actions;

export default gptSlice.reducer;
