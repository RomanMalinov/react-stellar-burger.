import { configureStore } from "@reduxjs/toolkit";
import constructorIngedientSlice from "./constructorIngedientSlice";
import ingredientDetailsSlice from "./ingredientDetailsSlice";
import orderDetailsSlice from "./orderDetailsSlice";
import ingredienListSlice from "./ingredientListSlice";
import authSlice from "./authSlice";
import { socketMiddleware } from "./socket-middleware";
import feedSlice from "./feedSlice";
import profileOrderSlice from "./profileOrderSlice";

import {
  setOpenStatus as feedWsOpen,
  setCloseStatus as feedWsClose,
  connect as feedWsConnect,
  disconnect as feedWsDisconnect,
  setConnectingStatus as feedWsConnecting,
  setError as feedWsError,
  setMessage as feedWsMessage
} from "./feedSlice";

import profileOrdersSlice, {
  setOpenStatus as ordersWsOpen,
  setCloseStatus as ordersWsClose,
  connect as ordersWsConnect,
  disconnect as ordersWsDisconnect,
  setConnectingStatus as ordersWsConnecting,
  setError as ordersWsError,
  setMessage as ordersWsMessage
} from "./profileOrderSlice"

// const feedWsConnectTyped = feedWsConnect as ActionCreatorWithPayload<string>;
// const ordersWsConnectTyped = ordersWsConnect as ActionCreatorWithPayload<string>;

const feedWebSocketMiddleware = socketMiddleware({
  onOpen: feedWsOpen,
  onClose: feedWsClose,
  connect: feedWsConnect,
  disconnect: feedWsDisconnect,
  connecting: feedWsConnecting,
  onError: feedWsError,
  onMessage: feedWsMessage,
})

const ordersWebSocketMiddleware  = socketMiddleware({
  onOpen: ordersWsOpen,
  onClose: ordersWsClose,
  connect: ordersWsConnect,
  disconnect: ordersWsDisconnect,
  connecting: ordersWsConnecting,
  onError: ordersWsError,
  onMessage: ordersWsMessage,
})

const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsSlice,
    constructorIngedient: constructorIngedientSlice,
    orderDetails: orderDetailsSlice,
    ingredientList: ingredienListSlice,
    auth: authSlice,
    feed: feedSlice,
    profileOrders: profileOrdersSlice
},
middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(feedWebSocketMiddleware, ordersWebSocketMiddleware )
}
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
