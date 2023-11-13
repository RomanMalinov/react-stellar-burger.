// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getOrder } from "../utils/api"; // Предполагается, что у вас есть функция API для получения данных о заказе

// // Создайте асинхронное действие для получения данных о заказе
// export const fetchOrderDetails = createAsyncThunk(
//   "orderDetails/fetchOrderDetails",
//   async (orderNumber, thunkAPI) => {
//     try {
//       // Получите данные о заказе, используя вашу функцию API
//       const response = await getOrder(orderNumber);

//       // Предположим, что ответ содержит данные о заказе
//       return response.data; // Адаптируйте это под структуру вашего фактического ответа
//     } catch (error) {
//       // Обработайте здесь возможные ошибки
//       // Вы можете отправить действие для установки состояния ошибки в Redux
//       return thunkAPI.rejectWithValue({ error: "Не удалось получить данные о заказе" });
//     }
//   }
// );

// // Создайте срез (slice) для управления состоянием данных о заказе
// const orderDetailsSlice = createSlice({
//   name: "orderDetails",
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     // Ваши другие редьюсеры здесь, если необходимо
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchOrderDetails.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(fetchOrderDetails.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchOrderDetails.rejected, (state, action) => {
//         state.data = null;
//         state.loading = false;
//         state.error = action.payload.error;
//       });
//   },
// });

// // Экспортируйте редьюсер и действия для использования в вашем хранилище
// export const { /* Добавьте другие экспортируемые действия, если необходимо */ } = orderDetailsSlice.actions;
// export default orderDetailsSlice.reducer;



















// import { createSlice } from "@reduxjs/toolkit";
// import { getOrder } from "../utils/api";

// export const fetchPlaceOrderAsync = createAsyncThunk(
//   "orderDetails/fetchPlaceOrderAsync",
//   placeOrder
// );

// const orderDetailsInitialState = {
//   name: '',
//   number: null,
//   totalPrice: 0
// }

// export const orderDetailsSlice = createSlice({
//   name: 'orderDetails',
//   initialState: orderDetailsInitialState,
//   reducers: {
//       setTotalPrice: (state, action) => {
//           state.totalPrice = action.payload
//       }
//   },
//   extraReducers: (builder) => {
//       builder
//           .addCase(fetchPlaceOrderAsync.pending, (state) => {
//               state.status = 'loading';
//           })
//           .addCase(fetchPlaceOrderAsync.fulfilled, (state, action) => {
//               state.status = 'idle';
//               state.name = action.payload.name;
//               state.number = action.payload.order?.number;
//           });
//   },
// })

// export const { setTotalPrice } = orderDetailsSlice.actions;

// export const getOrderList = (state) => state.orderDetails;
// export const getOrderStatus = (state) => state.orderDetails.status;
// export const getOrderTotalPrice = (state) => state.orderDetails.totalPrice;
