import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    toggle: (state) => {
      return !state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
