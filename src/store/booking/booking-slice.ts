import { createSlice } from '@reduxjs/toolkit';
import { ToastType } from 'components/toast/toast.enum';

import { addBooking, deleteBooking, editBooking } from './booking-action';
import { BookingState } from './types';

const initialState: BookingState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  toastType: null,
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,

  reducers: {
    resetBooking: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.toastType = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBooking.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.toastType = ToastType.add;
    });
    builder.addCase(addBooking.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.toastType = ToastType.add;
    });
    builder.addCase(addBooking.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.toastType = ToastType.add;
    });
    builder.addCase(deleteBooking.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.toastType = ToastType.delete;
    });
    builder.addCase(deleteBooking.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.toastType = ToastType.delete;
    });
    builder.addCase(deleteBooking.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.toastType = ToastType.delete;
    });
    builder.addCase(editBooking.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.toastType = ToastType.edit;
    });
    builder.addCase(editBooking.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.toastType = ToastType.edit;
    });
    builder.addCase(editBooking.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.toastType = ToastType.edit;
    });
  },
});

export const { resetBooking } = bookingSlice.actions;
export const bookingReducer = bookingSlice.reducer;
