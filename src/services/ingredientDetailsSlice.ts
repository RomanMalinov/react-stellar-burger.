import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TIngredient } from "../utils/types";

type TIngredientDetailSlice = {
  ingredient: TIngredient | null;
};

const initialState: TIngredientDetailSlice = {
  ingredient: null,
};

const ingredientDetailSlice = createSlice({
  name: "ingredientDetail",
  initialState,
  reducers: {
    setCurrentInformationIngredient: (state, action: PayloadAction<{ ingredient: TIngredient }>) => {
      state.ingredient = action.payload.ingredient;
    },
    removeCurrentInformationIngredient: (state) => {
      state.ingredient = null;
    },
  },
});

export const {
  setCurrentInformationIngredient,
  removeCurrentInformationIngredient,
} = ingredientDetailSlice.actions;
export default ingredientDetailSlice.reducer;
