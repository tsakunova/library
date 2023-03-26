import { ToastType } from 'components/toast/toast.enum';
import { UserDTO } from 'types/types';

export type UserState = {
  user: UserDTO | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  toastType: ToastType | null;
};
