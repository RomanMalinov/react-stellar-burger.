import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { TIngredient } from "../utils/types";

type ConstructorIngredientSlice = {
  buns: TIngredient | null;
  ingredients: TIngredient[];
  ingredientCounts: Record<string, number>;
};

const initialState: ConstructorIngredientSlice = {
  buns: null,
  ingredients: [],
  ingredientCounts: {},
};

const constructorIngredientSlice = createSlice({
  name: "constructorIngredient",
  initialState,
  reducers: {
    addIngredient: {
      reducer: (state, action: PayloadAction<TIngredient & { key: string }>) => {
        const { key, ...ingredient } = action.payload;
        state.ingredients.push({ ...ingredient, key });
        const count = state.ingredientCounts[ingredient._id] || 0;
        state.ingredientCounts[ingredient._id] = count + 1;
      },
      prepare: (payload: TIngredient) => {
        const key = nanoid();
        return { payload: { ...payload, key } };
      },
    },
    addBuns: (state, action: PayloadAction<TIngredient>) => {
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
    removeIngredient: (state, action: PayloadAction<{ id: string }>) => {
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
    moveProduct: (state, action: PayloadAction<{ dragIndex: number; hoverIndex: number }>) => {
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
