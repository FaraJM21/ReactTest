import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    errorMessage: "",
    numbers: localStorage.getItem("numbers")
      ? JSON.parse(localStorage.getItem("numbers"))
      : ["1", "2", "3", "4", "5", "6", "7", "8"],
    hasMore: "true",
    theme: localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme") || "light")
      : "light",
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
    setNumbers: (state, action) => {
      state.numbers = action.payload;
      localStorage.setItem("numbers", JSON.stringify(state.numbers));
    },
    hasMore: (state, action) => {
      state.hasMore = action.payload;
      localStorage.setItem("hasMore", JSON.stringify(state.hasMore));
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
    changetheme: (state, action) => {
      state.theme = action.payload;
      document.body.style.backgroundColor =
        state.theme === "dark" ? "rgb(18, 18, 18)" : "white";
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
  },
});
export const { getData, setNumbers, hasMore, setError, changetheme } =
  dataSlice.actions;
export default dataSlice.reducer;
