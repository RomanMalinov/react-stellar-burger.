import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getIngredients } from "../utils/api";
import { TIngredient } from "../utils/types";

export const fetchIngredientList = createAsyncThunk(
  "ingredientList/fetchIngredientList",
  getIngredients
);

type TIngredientListSlice = {
  ingredients: TIngredient[];
  isLoading: boolean;
  error: string | null;
};

const initialState: TIngredientListSlice = {
  ingredients: [],
  isLoading: false,
  error: null,
};

const ingredienListSlice = createSlice({
  name: "ingredientList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredientList.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIngredientList.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchIngredientList.rejected, (state, action) => {
        state.isLoading = false;

        state.ingredients = [];
      });
  },
});

export default ingredienListSlice.reducer;
