import React, { FC, useEffect, useState } from 'react';
import { ToastVariant } from 'components/toast/toast.enum';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useToast } from 'hooks/use-toast';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { fetchBooks } from 'store/books/books-actions';
import { fetchCategories } from 'store/categories/categories-actions';
import { selectLoading } from 'store/selectors/loading-selector';
import { selectHistoryBooks, selectReservedBook, selectTakenBook } from 'store/selectors/user-profile-selectors';
import { fetchUser } from 'store/user/user-action';
import { resetUser } from 'store/user/user-slice';
import { UserFormType } from 'store/utils/types';
import { setUserForm } from 'store/utils/utils-slice';

import { CredentialsSection } from './components/credentials-section';
import { HistorySection } from './components/history-section';
import { ReservedBooksSection } from './components/reserved-books-section';
import { TakenBookSection } from './components/taken-book-section';
import { UserNameBlock } from './components/user-name-block';
import { Container } from './profile.style';

export const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const [isEditType, setIsEditType] = useState<boolean>(false);
  const reservedBook = useTypedSelector(selectReservedBook) || null;
  const takenBook = useTypedSelector(selectTakenBook) || null;
  const historyBooks = useTypedSelector(selectHistoryBooks) || [];

  const { isError, isSuccess, toastType, user } = useTypedSelector(({ user }) => user);
  const {
    isError: isErrorBooking,
    isSuccess: isSuccessBooking,
    toastType: bookingToastType,
  } = useTypedSelector(({ booking }) => booking);

  const {
    isError: isErrorRate,
    isSuccess: isSuccessRate,
    toastType: rateToastType,
  } = useTypedSelector(({ comment }) => comment);

  useToast(ToastVariant.positive, isSuccess, toastType!);
  useToast(ToastVariant.negative, isError, toastType!);
  useToast(ToastVariant.positive, isSuccessBooking, bookingToastType!);
  useToast(ToastVariant.negative, isErrorBooking, bookingToastType!);
  useToast(ToastVariant.positive, isSuccessRate, rateToastType!);
  useToast(ToastVariant.negative, isErrorRate, rateToastType!);

  useEffect(() => {
    if (isSuccessRate) {
      dispatch(fetchUser());
    }
  }, [dispatch, isSuccessRate]);

  useEffect(() => {
    dispatch(
      setUserForm({
        type: UserFormType.edit,
        isDisabled: isEditType,
      })
    );
  }, [dispatch, isEditType]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBooks());
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(
    () => () => {
      dispatch(resetUser());
      dispatch(setUserForm(null));
    },
    [dispatch]
  );

  const editTypeHandler = (value: boolean) => {
    dispatch(
      setUserForm({
        type: UserFormType.edit,
        isDisabled: value,
      })
    );
    setIsEditType(value);
  };

  return (
    <Container>
      {user && (
        <React.Fragment>
          <UserNameBlock firstName={user?.firstName} lastName={user?.lastName} avatarImage={user?.avatar} />
          <CredentialsSection isEdit={isEditType} setIsEdit={editTypeHandler} user={user} />
          <ReservedBooksSection book={reservedBook} />
          <TakenBookSection book={takenBook} />
          <HistorySection books={historyBooks} />
        </React.Fragment>
      )}
    </Container>
  );
};
