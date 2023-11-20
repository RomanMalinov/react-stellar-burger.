import { createSlice } from "@reduxjs/toolkit";

const constructorSlice = createSlice({
  name: "constructorIngredient", //название временнон, добавить потом более осмысленное
  initialState: {
    bun: null,
    ingredients: []
  },
  reducers: {

  },
});

export const {/*actions */} = constructorSlice.actions;
export default constructorSlice.reducer;

//
