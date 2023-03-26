import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { BookingType } from 'types/actions.types';

export const addBooking = createAsyncThunk(
  ApiPath.bookings,
  async (data: BookingType) => (await axiosInstance.post(ApiPath.bookings, { data: { ...data } })).data
);

export const deleteBooking = createAsyncThunk(
  `${ApiPath.bookings}/delete`,
  async (id: number) => (await axiosInstance.delete(`${ApiPath.bookings}/${id}`)).data
);

export const editBooking = createAsyncThunk(`${ApiPath.bookings}/edit`, async (data: BookingType) => {
  const value = {
    order: data.order,
    dateOrder: data.dateOrder,
    book: data.book,
    customer: data.customer,
  };

  await axiosInstance.put(`${ApiPath.bookings}/${data.bookingId}`, { data: { ...value } });
});
