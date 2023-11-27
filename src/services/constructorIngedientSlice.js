import { createSlice } from "@reduxjs/toolkit";

const constructorIngredientSlice = createSlice({
  name: "constructorIngredient",
  initialState: {
    buns: null,
    ingredients: [],
  },
  reducers: {
    addIngredient: (state, action) => {
      state.ingredients.push(action.payload);
    },
    addBuns: (state, action) => {
      state.buns = action.payload;
    },
  },
});

export const {
  addIngredient,
  addBuns,
} = constructorIngredientSlice.actions;
export default constructorIngredientSlice.reducer;

