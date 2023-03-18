import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { AxiosError } from 'axios';
import { RegistrationUserData } from 'types/actions.types';

export const registrationRequest = createAsyncThunk(
  ApiPath.registration,
  async (user: RegistrationUserData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(ApiPath.registration, { ...user });

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.jwt);

      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return rejectWithValue(e.response?.status);
      }
    }

    return 500;
  }
);
