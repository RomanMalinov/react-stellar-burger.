import { createSlice, createAction } from "@reduxjs/toolkit";

import { ONLINE, OFFLINE, CONNECTING } from "../utils/const";

export const connect = createAction("FEED_CONNECT");
export const disconnect = createAction("FEED_DISCONNECT");

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    orders: [],
    total: null,
    totalToday: null,
    error: null,
    connectionStatus: OFFLINE,
  },
  reducers: {
    setConnectingStatus(state) {
      state.connectionStatus = CONNECTING;
    },
    setOpenStatus(state) {
      state.connectionStatus = ONLINE;
    },
    setCloseStatus(state) {
      state.connectionStatus = OFFLINE;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setMessage(state, action) {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    },
  },
});

export const { setConnectingStatus, setOpenStatus, setCloseStatus, setError, setMessage } =
  feedSlice.actions;

export default feedSlice.reducer;
