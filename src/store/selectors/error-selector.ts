import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const selectCategoriesError = (state: RootState) => state.categories.isError;
const selectBooksError = (state: RootState) => state.books.isError;
const selectUserError = (state: RootState) => state.user.isError;
const selectCurrentBookError = (state: RootState) => state.currentBook.isError;
const selectLoginError = (state: RootState) => state.login.isError;
const selectRegistrationError = (state: RootState) => state.registration.isError;

export const selectErrors = createSelector(
  [
    selectCategoriesError,
    selectBooksError,
    selectUserError,
    selectCurrentBookError,
    selectLoginError,
    selectRegistrationError,
  ],
  (categories, books, user, currentBook, login, registration) =>
    categories || books || user || currentBook || login || registration
);
