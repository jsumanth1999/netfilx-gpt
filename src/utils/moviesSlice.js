import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesNowPlaying: null,
    trailerPlaying : null,
  },
  reducers: {
    addMoviesNowPlaying: (state, action) => {
      state.moviesNowPlaying = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerPlaying = action.payload;
    }
  },
});

export const { addMoviesNowPlaying,addTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;
