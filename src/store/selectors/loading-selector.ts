import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const selectCategoriesLoading = (state: RootState) => state.categories.isLoading;
const selectBooksLoading = (state: RootState) => state.books.isLoading;
const selectCurrentBookLoading = (state: RootState) => state.currentBook.isLoading;
const selectLoginLoading = (state: RootState) => state.login.isLoading;
const selectRegistrationLoading = (state: RootState) => state.registration.isLoading;
const selectCommentLoading = (state: RootState) => state.comment.isLoading;

export const selectLoading = createSelector(
  [
    selectCategoriesLoading,
    selectBooksLoading,
    selectCurrentBookLoading,
    selectLoginLoading,
    selectRegistrationLoading,
    selectCommentLoading,
  ],
  (categories, books, currentBook, login, registration, comment) =>
    categories || books || currentBook || login || registration || comment
);
