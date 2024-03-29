import { ToastType } from 'components/layout/components/toast/toast.enum';

export type BookingState = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  toastType: ToastType | null;
};
