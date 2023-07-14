import { configureStore } from "@reduxjs/toolkit";
import data from "./dataReducer";

export const store = configureStore({
  reducer: {
    data,
  },
});
