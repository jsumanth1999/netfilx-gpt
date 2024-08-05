import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    languageSelector: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { languageSelector } = configSlice.actions;

export default configSlice.reducer;
