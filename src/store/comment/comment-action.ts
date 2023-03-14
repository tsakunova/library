import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { AddCommentType, FullBookDTO } from 'types/types';

export const addCommentForCurrentBook = createAsyncThunk(
  ApiPath.comments,
  async (data: AddCommentType, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(ApiPath.comments, { data: { ...data } });

      return response;
    } catch (err) {
      const {
        response: { data, status },
      } = err as unknown as {
        response: { data: string; status: number };
      };

      return rejectWithValue(status);
    }
  }
);
