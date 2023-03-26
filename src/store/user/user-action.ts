import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { UpdateUserData } from 'types/actions.types';
import { UserDTO } from 'types/types';

export const fetchUser = createAsyncThunk(ApiPath.me, async () => (await axiosInstance.get<UserDTO>(ApiPath.me)).data);

export const uploadPhoto = createAsyncThunk(ApiPath.upload, async (avatarData: { file: File; userId: number }) => {
  const formData = new FormData();
  const config = {
    headers: { 'content-type': 'form-data' },
  };

  formData.append('files', avatarData.file);
  const { data } = await axiosInstance.post(ApiPath.upload, formData, config);
  const avatar = {
    avatar: data[0].id,
  };

  const body = (await axiosInstance.put(`users/${avatarData.userId}`, avatar)).data;

  return body;
});

export const updateProfileRequest = createAsyncThunk(
  ApiPath.registration,
  async (data: UpdateUserData) => (await axiosInstance.put(`users/${data.id}`, data.data)).data
);
