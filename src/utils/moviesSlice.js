import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    playMovie: null,
    playMovieId: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addPlayMovie: (state, action) => {
      state.playMovie = action.payload;
    },
    removePlayMovie: (state) => {
      state.playMovie = null;
    },
    addPlayMovieId: (state, action) => {
      state.playMovieId = action.payload;
    },
    removePlayMovieId: (state, action) => {
      state.playMovieId = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addPlayMovie,
  removePlayMovie,
  addPlayMovieId,
  removePlayMovieId,
} = moviesSlice.actions;
export default moviesSlice.reducer;
