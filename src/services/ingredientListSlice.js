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

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getIngredients } from "../utils/api";

// export const fetchIngredientList = createAsyncThunk(
//   "ingredientList/fetchIngredientList",
//   getIngredients
// );

// const ingredienListSlice = createSlice({
//   name: "ingredientList",
//   initialState: {
//     ingredients: [],
//     status: null,
//     error: null,
//   },
//   // reducers: {
//   //   setIngredients: (state, action) => {
//   //     state.ingredients = action.payload;
//   //   },
//   // },
//   extraReducers: (builder) => {
//     builder
//     .addCase(fetchIngredientList.pending, (state, action) => {
//       state.status = "loading";
//       state.error = null;
//     })
//     .addCase(fetchIngredientList.fulfilled, (state, action) => {
//       state.status = "resolved";
//       state.ingredients = action.payload;
//     })
//     .addCase(fetchIngredientList.rejected, (state, action) => {
//       state.status = "rejected";
//       state.error = action.payload;
//     })
//   },
// });

// export const { setIngredients } = ingredienListSlice.actions;
// export default ingredienListSlice.reducer;
