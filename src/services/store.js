import { configureStore } from "@reduxjs/toolkit";
import constructorSlice from "./constructorSlice";
import ingredientDetailsSlice from "./ingredientDetailsSlice";
import orderDetailsSlise from "./orderDetailsSlise";
import ingredienListSlice from "./ingredientListSlice";

const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsSlice,
    // activeIngredient: activeIngredientSlice,
    constructor: constructorSlice,
    orderDetails: orderDetailsSlise,
    ingredient: ingredienListSlice,
  },
});

export default store;
