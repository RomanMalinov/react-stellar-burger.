import { createSlice } from "@reduxjs/toolkit";

const constructorIngedientSlice = createSlice({
  name: "constructorIngredient", //название временнон, добавить потом более осмысленное
  initialState: {
    bun: null,
    ingredients: []
  },
  reducers: {

  },
});

export const {/*actions */} = constructorIngedientSlice.actions;
export default constructorIngedientSlice.reducer;

//
