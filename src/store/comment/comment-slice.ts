import { createSlice } from '@reduxjs/toolkit';
import { ToastType } from 'components/toast/toast.enum';

import { addCommentForCurrentBook, editCommentForCurrentBook } from './comment-action';
import { CommentState } from './types';

const initialState: CommentState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  toastType: null,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,

  reducers: {
    hideCommentToast: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.toastType = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCommentForCurrentBook.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.toastType = ToastType.rate;
    });
    builder.addCase(addCommentForCurrentBook.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.toastType = ToastType.rate;
    });
    builder.addCase(addCommentForCurrentBook.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.toastType = ToastType.rate;
    });
    builder.addCase(editCommentForCurrentBook.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.toastType = ToastType.editRate;
    });
    builder.addCase(editCommentForCurrentBook.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.toastType = ToastType.editRate;
    });
    builder.addCase(editCommentForCurrentBook.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.toastType = ToastType.editRate;
    });
  },
});

export const { hideCommentToast } = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
