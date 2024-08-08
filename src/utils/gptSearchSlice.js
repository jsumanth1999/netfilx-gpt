import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSearchPage: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.toggleSearchPage = !state.toggleSearchPage;
    },
    addGptMovieResult: (state, action) => {
      const {movieNames, movieResults} = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    }
  },
});

export const { toggleGptSearch, addGptMovieResult } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
