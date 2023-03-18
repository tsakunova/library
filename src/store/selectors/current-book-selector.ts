import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const selectCurrentBook = (state: RootState) => state.currentBook.currentBook;

export const selectBookWithSortedCommentsByDate = createSelector([selectCurrentBook], (book) => {
  if (!book) return null;
  const { comments } = book;

  if (!comments) return book;

  const sortedComments = [...comments].sort((a, b) => {
    const aDate = new Date(a.createdAt).getDate();
    const bDate = new Date(b.createdAt).getDate();

    if (aDate === bDate) {
      const aHours = new Date(a.createdAt).getHours();
      const bHours = new Date(b.createdAt).getHours();

      return aHours === bHours
        ? new Date(a.createdAt).getMinutes() - new Date(b.createdAt).getMinutes()
        : aHours - bHours;
    }

    return aDate - bDate;
  });

  return {
    ...book,
    comments: sortedComments,
  };
});
