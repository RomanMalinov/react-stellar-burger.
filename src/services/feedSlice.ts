import { createSlice, createAction } from "@reduxjs/toolkit";
import { ONLINE, OFFLINE, CONNECTING } from "../utils/const";
import { TOrder } from "../utils/types";

export const connect = createAction<string>("FEED_CONNECT");
export const disconnect = createAction("FEED_DISCONNECT");

type TFeedSlice = {
  orders: TOrder[];
  total: number | null;
  totalToday: number | null;
  error: string | null;
  connectionStatus: typeof ONLINE | typeof OFFLINE | typeof CONNECTING;
};

const initialState: TFeedSlice = {
  orders: [],
  total: null,
  totalToday: null,
  error: null,
  connectionStatus: OFFLINE,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
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
