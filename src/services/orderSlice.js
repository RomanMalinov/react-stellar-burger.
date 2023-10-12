import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderNumber: null,
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setOrderNumber, setLoading, setError } = orderSlice.actions;

export const createOrder = (ingredientIds) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(
        "https://norma.nomoreparties.space/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ingredients: ingredientIds }),
        }
      );
      if (!response.ok) {
        throw new Error(`Ошибка при создании заказа: ${response.status}`);
      }
      const responseData = await response.json();
      dispatch(setOrderNumber(responseData.order.number));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export default orderSlice.reducer;
