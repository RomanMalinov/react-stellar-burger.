import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getUserData,
  loginUser,
  logout,
  passwordReset,
  resetPassword,
  registerUser,
  updateToken,
  updateUserData,
} from "../utils/api";
import { deleteCookie, setCookie } from "../utils/cookie";
import { RootState } from "./store";

export const fetchGetUserData = createAsyncThunk(
  "auth/fetchGetUserData",
  getUserData
);

export const fetchUpdateUser = createAsyncThunk(
  "auth/fetchUpdateUser",
  updateUserData
);

export const fetchLoginUser = createAsyncThunk(
  "auth/fetchLoginUser",
  loginUser
);

export const fetchRegisterUser = createAsyncThunk(
  "auth/fetchRegisterUser",
  registerUser
);

export const fetchPasswordReset = createAsyncThunk(
  "auth/fetchPasswordReset",
  passwordReset
);

export const fetchResetPassword = createAsyncThunk(
  "auth/fetchResetPassword",
  resetPassword
);

export const fetchLogout = createAsyncThunk("auth/fetchLogout", logout);

type TUser = {
  email: string;
  name: string;
  password: string;
}

const userInitialState: TUser = {
  email: '',
  name: '',
  password: ''
}

const initialState: { user: TUser, isLoading: boolean; } = {
  user: userInitialState,
  isLoading: true,
}

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    refresh(state) {
      state.isLoading = true;
    }
  }, extraReducers: (builder) => {
    builder
      .addCase(fetchRegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRegisterUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success && action.payload.accessToken) {
          setCookie(
            "accessToken",
            action.payload.accessToken.split("Bearer ")[1]
          );

          if (action.payload.refreshToken) {
            setCookie("refreshToken", action.payload.refreshToken);
          }
          state.user.email = action.payload.user.email;
          state.user.name = action.payload.user.name;
        }
      })
      .addCase(fetchLoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLoginUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success && action.payload.accessToken) {
          setCookie(
            "accessToken",
            action.payload.accessToken.split("Bearer ")[1]
          );
          if (action.payload.refreshToken) {
            setCookie("refreshToken", action.payload.refreshToken);
          }
          state.user.email = action.payload.user.email;
          state.user.name = action.payload.user.name;
        }
      })

      .addCase(fetchLogout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLogout.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchLogout.fulfilled, (state, action) => {
        state.isLoading = false;
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        state.user = { email: "", name: "", password: "" };
      })
      .addCase(fetchGetUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetUserData.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchGetUserData.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload.success) {
          state.user.email = action.payload.user.email;
          state.user.name = action.payload.user.name;
        }
      })
      .addCase(fetchUpdateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUpdateUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchUpdateUser.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload.success) {
          state.user.email = action.payload.user.email;
          state.user.name = action.payload.user.name;
        }
      })
      .addCase(fetchPasswordReset.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPasswordReset.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchPasswordReset.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchResetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchResetPassword.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchResetPassword.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});
export const { refresh } = userSlice.actions;
export const getUser = (state: RootState) => state.auth.user;
export const loadState = (state: RootState) => state.auth.isLoading;
export default userSlice.reducer;
