import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    errorMessage: "",
    numbers: localStorage.getItem("numbers")
      ? JSON.parse(localStorage.getItem("numbers"))
      : ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
    setNumbers: (state, action) => {
      state.numbers = action.payload;
      localStorage.setItem("numbers", JSON.stringify(state.numbers));
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});
export const { getData, setNumbers, setError } = dataSlice.actions;
export default dataSlice.reducer;
