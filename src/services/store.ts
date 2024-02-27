import { configureStore } from "@reduxjs/toolkit";
import constructorIngedientSlice from "./constructorIngedientSlice";
import ingredientDetailsSlice from "./ingredientDetailsSlice";
import orderDetailsSlice from "./orderDetailsSlice";
import ingredienListSlice from "./ingredientListSlice";
import authSlice from "./authSlice";
import { socketMiddleware } from "./socket-middleware";
import feedSlice from "./feedSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import {
  setOpenStatus as feedWsOpen,
  setCloseStatus as feedWsClose,
  connect as feedWsConnect,
  disconnect as feedWsDisconnect,
  setConnectingStatus as feedWsConnecting,
  setError as feedWsError,
  setMessage as feedWsMessage
} from "./feedSlice";

const feedWebSocketMiddleware = socketMiddleware({
  onOpen: feedWsOpen,
  onClose: feedWsClose,
  connect: feedWsConnect,
  disconnect: feedWsDisconnect,
  connecting: feedWsConnecting,
  onError: feedWsError,
  onMessage: feedWsMessage,
})

const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsSlice,
    constructorIngedient: constructorIngedientSlice,
    orderDetails: orderDetailsSlice,
    ingredientList: ingredienListSlice,
    auth: authSlice,
    feed: feedSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(feedWebSocketMiddleware,)
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
