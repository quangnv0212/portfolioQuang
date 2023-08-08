import { configureStore } from "@reduxjs/toolkit";
import darkmodeSlice from "./darkmodeSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeSlice,
  },
});
