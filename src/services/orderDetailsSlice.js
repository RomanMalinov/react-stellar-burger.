import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrder } from "../utils/api";

export const fetchOrderDetailsSlice = createAsyncThunk(
  "orderDetailsSlice/fetchOrderDetailsSlice",
  getOrder
);

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: {
    orderNumber: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderDetailsSlice.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrderDetailsSlice.fulfilled, (state, action) => {
        state.orderNumber = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOrderDetailsSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.orderNumber = null;
      });
  },
});

export const { setOrderNumber } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
