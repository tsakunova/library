import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const selectCurrentBook = (state: RootState) => state.currentBook.currentBook;

export const selectBookWithSortedCommentsByDate = createSelector([selectCurrentBook], (book) => {
  if (!book) return null;
  const { comments } = book;

  if (!comments) return book;

  const sortedComments = [...comments].sort(
    (a, b) => new Date(a.createdAt).getDate() - new Date(b.createdAt).getDate()
  );

  return {
    ...book,
    comments: sortedComments,
  };
});
