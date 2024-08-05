import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesNowPlaying: null,
    trailerPlaying: null,
  },
  reducers: {
    addMoviesNowPlaying: (state, action) => {
      state.moviesNowPlaying = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerPlaying = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    }
  },
});

export const { addMoviesNowPlaying, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrendingMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
