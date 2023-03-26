import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { MainBookDTO } from 'types/types';

const selectUser = (state: RootState) => state.user.user;

export const selectReservedBook = createSelector([selectUser], (user) => {
  if (!user?.booking.book) return null;
  const book: MainBookDTO = {
    ...user?.booking.book,
    booking: {
      id: user?.booking.id,
      order: user?.booking.order,
      dateOrder: user?.booking.dateOrder,
      customerId: user?.id,
      customerFirstName: user?.firstName,
      customerLastName: user?.lastName,
    },
  };

  return book;
});

export const selectTakenBook = createSelector([selectUser], (user) => {
  if (!user?.delivery.book) return null;
  const book: MainBookDTO = {
    ...user?.delivery.book,
    delivery: {
      id: user?.delivery.id,
      handed: user?.delivery.handed,
      dateHandedFrom: user?.delivery.dateHandedFrom,
      dateHandedTo: user?.delivery.dateHandedTo,
      recipientId: user?.id,
      recipientFirstName: user?.firstName,
      recipientLastName: user?.lastName,
    },
  };

  return book;
});

export const selectHistoryBooks = createSelector([selectUser], (user) => {
  if (!user?.history.id || !user?.history.books) return [];
  const books: MainBookDTO[] = user.history.books.map((item) => ({
    ...item,
    histories: {
      id: user.history.id,
    },
  }));

  return books;
});
