import { ToastType } from 'components/toast/toast.enum';

export type CommentState = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  toastType: ToastType | null;
};
