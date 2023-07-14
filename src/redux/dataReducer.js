import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    errorMessage: "",
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});
export const { getData, setError } = dataSlice.actions;
export default dataSlice.reducer;
