import { createSlice } from '@reduxjs/toolkit';

import { addCommentForCurrentBook } from './comment-action';
import { CommentState } from './types';

const initialState: CommentState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,

  reducers: {
    hideCommentToast: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCommentForCurrentBook.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(addCommentForCurrentBook.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
    });
    builder.addCase(addCommentForCurrentBook.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
  },
});

export const { hideCommentToast } = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
