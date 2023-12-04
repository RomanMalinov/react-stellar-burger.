import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const constructorIngredientSlice = createSlice({
  name: "constructorIngredient",
  initialState: {
    buns: null,
    ingredients: [],
    ingredientCounts: {},
  },
  reducers: {
    addIngredient: {
      reducer: (state, action) => {
        const { key, ...ingredient } = action.payload;
        state.ingredients.push({ ...ingredient, key });
        const count = state.ingredientCounts[ingredient._id] || 0;
        state.ingredientCounts[ingredient._id] = count + 1;
      },
      prepare: (payload) => {
        const key = nanoid();
        return { payload: { ...payload, key } };
      },
    },
    addBuns: (state, action) => {
      if (!state.buns) {
        const count = state.ingredientCounts[action.payload._id] || 0;
        state.ingredientCounts[action.payload._id] = count + 2;
      } else {
        const prevBunsCount = state.ingredientCounts[state.buns._id] || 0;
        state.ingredientCounts[state.buns._id] = Math.max(prevBunsCount - 2, 0);
        const newBunsCount = state.ingredientCounts[action.payload._id] || 0;
        state.ingredientCounts[action.payload._id] = newBunsCount + 2;
      }

      state.buns = action.payload;
    },
    removeIngredient: (state, action) => {
      const removedIngredient = state.ingredients.find(
        (ingredient) => ingredient.key === action.payload.id
      );

      if (removedIngredient) {
        const count = state.ingredientCounts[removedIngredient._id] || 0;
        state.ingredientCounts[removedIngredient._id] = Math.max(count - 1, 0);
      }

      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.key !== action.payload.id
      );
    },
    moveProduct: (state, action) => {
      let array = state.ingredients.slice();
      array[action.payload.dragIndex] = array.splice(
        action.payload.hoverIndex,
        1,
        array[action.payload.dragIndex]
      )[0];
      state.ingredients = array;
    },
    resetIndgredient: (state) => {
      state.ingredients = [];
    },
  },
});

export const { addIngredient, addBuns, removeIngredient, moveProduct } =
  constructorIngredientSlice.actions;
export default constructorIngredientSlice.reducer;
