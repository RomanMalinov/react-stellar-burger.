import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrder, getChosenOrder } from "../utils/api";

export const fetchOrderDetailsSlice = createAsyncThunk(
  "orderDetailsSlice/fetchOrderDetailsSlice",
  getOrder
);

export const fetchSelectedOrderData = createAsyncThunk(
  "order/fetchSelectedOrderData",
  async (data) => {
    const response = getChosenOrder(data);
    return response;
  }
);

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: {
    orderNumber: null,
    selectedOrder: null,
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
      })

      .addCase(fetchSelectedOrderData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSelectedOrderData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.orderData = null;
      })
      .addCase(fetchSelectedOrderData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedOrder = action.payload;
      });
  },
});

export const { setOrderNumber } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
