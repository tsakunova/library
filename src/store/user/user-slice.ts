import { createSlice } from '@reduxjs/toolkit';
import { ToastType } from 'components/toast/toast.enum';

import { UserState } from './types';
import { fetchUser, updateProfileRequest, uploadPhoto } from './user-action';

const initialState: UserState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  toastType: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.user = null;
      state.toastType = null;
      state.isSuccess = false;
      state.isError = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(uploadPhoto.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(uploadPhoto.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.user = action.payload;
      state.toastType = ToastType.photo;
    });
    builder.addCase(uploadPhoto.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.toastType = ToastType.photo;
    });
    builder.addCase(updateProfileRequest.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(updateProfileRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.toastType = ToastType.edit;
    });
    builder.addCase(updateProfileRequest.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.toastType = ToastType.edit;
    });
  },
});
export const { resetUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
