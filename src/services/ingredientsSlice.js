import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
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

export const { setIngredients, setLoading, setError } =
  ingredientsSlice.actions;

export const fetchIngredients = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(
        "https://norma.nomoreparties.space/api/ingredients"
      );
      if (!response.ok) {
        throw new Error(`Ошибка при запросе к серверу: ${response.status}`);
      }
      const responseData = await response.json();
      dispatch(setIngredients(responseData.data || []));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export default ingredientsSlice.reducer;
