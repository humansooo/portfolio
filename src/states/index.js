// slice for theme
import { lightTheme, darkTheme } from "../constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: lightTheme,
};

const appSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      if (state.theme.mode === darkTheme.mode) {
        state.theme = lightTheme;
      } else {
        state.theme = darkTheme;
      }
    },
  },
});

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;
