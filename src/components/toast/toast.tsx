import { FC, useCallback, useEffect } from 'react';
import { CloseSVG } from 'assets/icons';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { resetBooking } from 'store/booking/booking-slice';
import { hideCommentToast } from 'store/comment/comment-slice';
import { hideToast } from 'store/utils/utils-slice';

import { CloseButton, Container, ToastInfo } from './toast.style';
import { getToastStyles } from './toast.utils';

export const Toast: FC = () => {
  const toast = useTypedSelector(({ utils }) => utils.toast);
  const dispatch = useAppDispatch();
  const { icon: Icon, styledComponent: Component } = getToastStyles(toast?.toastVariant);

  const onClose = useCallback(() => {
    dispatch(hideToast());
    dispatch(resetBooking());
    dispatch(hideCommentToast());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => onClose(), 3000);
  }, [dispatch, onClose]);

  return (
    <Container isActive={!!toast}>
      <Component data-test-id='error'>
        <ToastInfo>
          <Icon />
          <p>{toast?.toastMessage}</p>
        </ToastInfo>
        <CloseButton data-test-id='alert-close' onClick={onClose}>
          <CloseSVG />
        </CloseButton>
      </Component>
    </Container>
  );
};
