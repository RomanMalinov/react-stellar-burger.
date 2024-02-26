import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrder, getChosenOrder } from "../utils/api";
import { TOrder } from "../utils/types";

export const fetchOrderDetailsSlice = createAsyncThunk(
  "orderDetailsSlice/fetchOrderDetailsSlice",
  getOrder
);

export const fetchSelectedOrderData = createAsyncThunk<TOrder, string>(
  "order/fetchSelectedOrderData",
  async (data) => {
    const response = getChosenOrder(data);
    return response;
  }
);

type TOrderDetailsSlice = {
  orderNumber: string | null;
  selectedOrder: TOrder | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: TOrderDetailsSlice = {
  orderNumber: null,
  selectedOrder: null,
  isLoading: false,
  error: null,
};

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
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
        state.orderNumber = action.payload.number;
        state.isLoading = false;
      })
      .addCase(fetchOrderDetailsSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Unknown error';
        state.orderNumber = null;
      })

      .addCase(fetchSelectedOrderData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSelectedOrderData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Unknown error';
        state.selectedOrder = null;
      })
      .addCase(fetchSelectedOrderData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedOrder = action.payload;
      });
  },
});

export const { setOrderNumber } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
