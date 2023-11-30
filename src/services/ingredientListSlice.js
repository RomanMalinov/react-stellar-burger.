import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getIngredients } from "../utils/api";

export const fetchIngredientList = createAsyncThunk(
  "ingredientList/fetchIngredientList",
  getIngredients
);

const ingredienListSlice = createSlice({
  name: "ingredientList",
  initialState: {
    ingredients: [],
    isLoading: false,
    error: null,
  },
  // reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredientList.pending, (state, action) => {
        state.isLoading = "loading";
        state.error = null;
      })
      .addCase(fetchIngredientList.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchIngredientList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { setIngredients } = ingredienListSlice.actions;
export default ingredienListSlice.reducer;
