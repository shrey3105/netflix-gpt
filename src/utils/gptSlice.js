import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    language: "en",
    searchedMovieResults: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.gptSearch = action.payload;
    },
    toggleLanguage: (state, action) => {
      state.language = action.payload;
    },
    updateSearchedMovieResults: (state, action) => {
      state.searchedMovieResults = action.payload;
    },
  },
});

export const { toggleGptSearch, toggleLanguage, updateSearchedMovieResults } =
  gptSlice.actions;

export default gptSlice.reducer;
