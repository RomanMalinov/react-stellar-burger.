import { createSlice } from "@reduxjs/toolkit";
import { getIngredients } from "../utils/api";

const ingredienListSlice = createSlice({
  name: "ingredientList",
  initialState: {

  },
  reducers: {

  },
});

export const {/*actions */} = ingredienListSlice.actions;
export default ingredienListSlice.reducer;
