import { createSlice } from "@reduxjs/toolkit";

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: {
    orderNumber: null,
  },
  reducers: {
    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
  },
});

export const { setOrderNumber } = orderDetailsSlice.actions;

export default orderDetailsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   orderNumber: null,
// };

// const orderDetailsSlice = createSlice({
//   name: "orderDetails",
//   initialState,
//   reducers: {
//     setOrderNumber: (state, action) => {
//       state.orderNumber = action.payload;
//     },
//   },
// });

// export const { setOrderNumber } = orderDetailsSlice.actions;

// export default orderDetailsSlice.reducer;
