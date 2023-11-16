import { configureStore } from "@reduxjs/toolkit";
import constructorSlice from "./constructorSlice";
import ingredientDetailsSlice from "./ingredientDetailsSlice";
import orderDetailsSlise from "./orderDetailsSlise";
import ingredientSlice from "./ingredientSlice";

const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsSlice,
    constructor: constructorSlice,
    orderDetails: orderDetailsSlise,
    ingredient: ingredientSlice,
  },
});

export default store;
