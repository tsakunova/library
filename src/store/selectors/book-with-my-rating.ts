import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const selectUser = (state: RootState) => state.login.user?.id;
const selectCurrentBook = (state: RootState) => state.currentBook.currentBook?.comments;

export const selectBookWithMyRating = createSelector([selectUser, selectCurrentBook], (userId, comments) => {
  if (!comments) return null;

  return [...comments].filter((comment) => comment.user.commentUserId === Number(userId))[0];
});
