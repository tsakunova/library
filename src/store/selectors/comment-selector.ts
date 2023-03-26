import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const selectUser = (state: RootState) => state.login.user?.id;
const selectCurrentBook = (state: RootState) => state.currentBook.currentBook?.id;

export const selectBookAndUserID = createSelector([selectUser, selectCurrentBook], (user, book) => ({
  book: book || 0,
  user: user || '',
}));
