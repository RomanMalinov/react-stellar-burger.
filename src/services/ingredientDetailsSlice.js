import { createSlice } from "@reduxjs/toolkit";

const ingredientDetailSlice = createSlice({
  name: "ingredientDetail",
  initialState: {
    ingredient: null,
  },
  reducers: {
    setCurrentInformationIngredient: (state, action) => {
      state.ingredient = action.payload
    },
    removeCurrentInformationIngredient: (state, action) => {
      state.ingredient = action.null
    }
  },
});


export const  {setCurrentInformationIngredient, removeCurrentInformationIngredient } = ingredientDetailSlice.actions;
export default ingredientDetailSlice.reducer;
//


