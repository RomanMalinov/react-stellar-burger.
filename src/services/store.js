import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import orderReducer from "./orderSlice";
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    order: orderReducer,
  },
  // middleware: [thunkMiddleware],
  // composeWithDevTools,
});

export default store;
