import { configureStore } from "@reduxjs/toolkit";
import constructorIngedientSlice from "./constructorIngedientSlice";
import ingredientDetailsSlice from "./ingredientDetailsSlice";
import orderDetailsSlice from "./orderDetailsSlice";
import ingredienListSlice from "./ingredientListSlice";

const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsSlice,
    constructorIngedient: constructorIngedientSlice,
    orderDetails: orderDetailsSlice,
    ingredientList: ingredienListSlice,
  },
});

export default store;
