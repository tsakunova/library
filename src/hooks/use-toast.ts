import { useEffect, useMemo } from 'react';
import { AppToast, ToastMessages, ToastType, ToastVariant } from 'components/toast/toast.enum';
import { setToast } from 'store/utils/utils-slice';

import { useAppDispatch } from './use-app-dispatch';

const getBookingToastMessages = (type: ToastType) => {
  switch (type) {
    case ToastType.add:
      return {
        success: ToastMessages.bookingSuccess,
        error: ToastMessages.bookingError,
      };
    case ToastType.delete:
      return {
        success: ToastMessages.deleteBookingSuccess,
        error: ToastMessages.deleteBookingError,
      };
    case ToastType.edit:
      return {
        success: ToastMessages.editSuccess,
        error: ToastMessages.editError,
      };
    case ToastType.rate:
      return {
        success: ToastMessages.addRatingSuccess,
        error: ToastMessages.addRatingError,
      };
    case ToastType.editRate:
      return {
        success: ToastMessages.editRatingSuccess,
        error: ToastMessages.editRatingError,
      };

    case ToastType.photo:
      return {
        success: ToastMessages.uploadPhotoSuccess,
        error: ToastMessages.uploadPhotoError,
      };
    case ToastType.main:
      return {
        success: ToastMessages.mainSuccess,
        error: ToastMessages.mainError,
      };

    default:
      return {
        success: ToastMessages.mainSuccess,
        error: ToastMessages.mainError,
      };
  }
};

export const useToast = (toastVariant: ToastVariant, value: boolean, toastType: ToastType) => {
  const dispatch = useAppDispatch();

  const messages = getBookingToastMessages(toastType);
  const toastMessage = toastVariant === ToastVariant.negative ? messages.error : messages.success;

  const toast: AppToast = useMemo(
    () => ({
      toastVariant,
      toastMessage,
      toastType,
    }),
    [toastType, toastMessage, toastVariant]
  );

  useEffect(() => {
    if (value) dispatch(setToast(toast));
  }, [dispatch, toast, value]);
};
