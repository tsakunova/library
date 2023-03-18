import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { AddCommentType } from 'types/actions.types';

export const addCommentForCurrentBook = createAsyncThunk(
  ApiPath.comments,
  async (data: AddCommentType) => (await axiosInstance.post(ApiPath.comments, { data: { ...data } })).data
);
