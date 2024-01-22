import { configureStore } from "@reduxjs/toolkit";
import constructorIngedientSlice from "./constructorIngedientSlice";
import ingredientDetailsSlice from "./ingredientDetailsSlice";
import orderDetailsSlice from "./orderDetailsSlice";
import ingredienListSlice from "./ingredientListSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsSlice,
    constructorIngedient: constructorIngedientSlice,
    orderDetails: orderDetailsSlice,
    ingredientList: ingredienListSlice,
    auth: authSlice,
  },
});

export default store;
