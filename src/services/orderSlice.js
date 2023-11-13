import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bun: null,
  ingredients: [],
  orderNumber: null,
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setBun: (state, action) => {
      state.bun = action.payload;
    },
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
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

export const { setBun, setIngredients, setOrderNumber, setLoading, setError } = orderSlice.actions;

export const addIngredient = (ingredient) => {
  return (dispatch, getState) => {
    if (ingredient.type === 'bun') {
      dispatch(setBun(ingredient));
    } else {
      dispatch(setIngredients([...getState().order.ingredients, ingredient]));
    }
  };
};

export const removeIngredient = (index) => {
  return (dispatch, getState) => {
    const newIngredients = [...getState().order.ingredients];
    newIngredients.splice(index, 1);
    dispatch(setIngredients(newIngredients));
  };
};

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
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export default orderSlice.reducer;
