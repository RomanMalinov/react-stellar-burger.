import { createSlice } from "@reduxjs/toolkit";
import { getIngredients } from "../utils/api";

const ingredienListSlice = createSlice({
  name: "ingredientList",
  initialState: {
    ingredients: [],
    // isLoading: false,
    // error: null,
  },
  reducers: {
    setIngredients: (state, action ) => {},
  },
});

export const {
  /*actions */
} = ingredienListSlice.actions;
export default ingredienListSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getIngredients as fetchIngredients } from '../utils/api';

// export const getIngredients = createAsyncThunk('ingredients/fetch', async () => {
//   const ingredients = await fetchIngredients();
//   return ingredients;
// });

// const ingredienListSlice = createSlice({
//   name: 'ingredientList',
//   initialState: {
//     ingredients: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getIngredients.pending, (state, action) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(getIngredients.fulfilled, (state, action) => {
//         state.ingredients = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(getIngredients.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error;
//       });
//   },
// });

// export default ingredienListSlice.reducer;
