import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { AddCommentType } from 'types/actions.types';

export const addCommentForCurrentBook = createAsyncThunk(
  ApiPath.comments,
  async (value: AddCommentType) => (await axiosInstance.post(ApiPath.comments, { data: { ...value.data } })).data
);

export const editCommentForCurrentBook = createAsyncThunk(
  `${ApiPath.comments}/edit`,
  async (value: AddCommentType) =>
    (await axiosInstance.put(`${ApiPath.comments}/${value.commentId}`, { data: { ...value.data } })).data
);
