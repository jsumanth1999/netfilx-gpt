import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSearchPage: false,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.toggleSearchPage = !state.toggleSearchPage;
    },
  },
});

export const { toggleGptSearch } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
