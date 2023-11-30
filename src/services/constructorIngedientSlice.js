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
    addIngredient: (state, action) => {
      const ingredientWithKey = {
        ...action.payload,
        key: nanoid(),
      };
      state.ingredients.push(ingredientWithKey);
      const count = state.ingredientCounts[ingredientWithKey._id] || 0;
      state.ingredientCounts[ingredientWithKey._id] = count + 1;
    },
    addBuns: (state, action) => {
      if (!state.buns) {
        const count = state.ingredientCounts[action.payload._id] || 0;
        state.ingredientCounts[action.payload._id] = count + 2;
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
  },
});

export const { addIngredient, addBuns, removeIngredient } =
  constructorIngredientSlice.actions;
export default constructorIngredientSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// const constructorIngredientSlice = createSlice({
//   name: "constructorIngredient",
//   initialState: {
//     buns: null,
//     ingredients: [],
//   },
//   reducers: {
//     addIngredient: (state, action) => {
//       const ingredientWithKey = {
//         ...action.payload,
//         key: nanoid(),
//       };
//       state.ingredients.push(ingredientWithKey);
//     },
//     addBuns: (state, action) => {
//       state.buns = action.payload;
//     },
//     removeIngredient: (state, action) => {
//       state.ingredients = state.ingredients.filter(
//         (ingredient) => ingredient.key !== action.payload.id
//       );
//     },
//   },
// });

// export const { addIngredient, addBuns, removeIngredient } =
//   constructorIngredientSlice.actions;
// export default constructorIngredientSlice.reducer;
