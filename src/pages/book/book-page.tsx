import { FC, SyntheticEvent, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PrimaryButton } from 'components/buttons/primary-button';
import { ModalType } from 'components/layout/components/modal-in-app/enum';
import { ToastType, ToastVariant } from 'components/layout/components/toast/toast.enum';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useModal } from 'hooks/use-modal';
import { useToast } from 'hooks/use-toast';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Wrapper } from 'index.style';
import { hideBookingToast } from 'store/booking/booking-slice';
import { hideCommentToast } from 'store/comment/comment-slice';
import { fetchCurrentBook } from 'store/current-book/current-book-actions';
import { resetBook } from 'store/current-book/current-book-slice';
import { selectBookWithMyRating } from 'store/selectors/book-with-my-rating';
import { selectBookWithSortedCommentsByDate } from 'store/selectors/current-book-selector';
import { setModal } from 'store/utils/utils-slice';
import { ButtonType, TitleVariant } from 'types/enum';

import { BookAbout } from './components/book-about';
import { BookRatingSection } from './components/book-rating';
import { CommentsSection } from './components/comments';
import { FullInfoSection } from './components/full-info';
import { BookContainer, ButtonContainer, InfoSection } from './book-page.style';

export const BookPage: FC = () => {
  const { bookId } = useParams();
  const { isSuccess, isError: isErrorComment } = useTypedSelector((state) => state.comment);
  const {
    isSuccess: isSuccessBooking,
    isError: isErrorBooking,
    toastType,
  } = useTypedSelector((state) => state.booking);
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useTypedSelector((state) => state.currentBook);
  const currentBook = useTypedSelector(selectBookWithSortedCommentsByDate);
  const withMyComment = useTypedSelector(selectBookWithMyRating);

  useToast(ToastVariant.positive, isSuccess, ToastType.rate);
  useToast(ToastVariant.negative, isErrorComment, ToastType.rate);
  useToast(ToastVariant.positive, isSuccessBooking, toastType!);
  useToast(ToastVariant.negative, isErrorBooking, toastType!);
  useToast(ToastVariant.negative, isError, ToastType.main);

  const { isShow, setIsShow } = useModal(ModalType.rating);

  const { showModalForBooking } = useModal(ModalType.booking, currentBook);

  const showModalForRate = useCallback(
    (e: SyntheticEvent) => {
      setIsShow(true);
      dispatch(setModal({ isShow, modalType: ModalType.rating }));
    },
    [dispatch, isShow, setIsShow]
  );

  useEffect(() => {
    if (bookId) dispatch(fetchCurrentBook(bookId));
  }, [bookId, dispatch]);

  useEffect(() => {
    if (bookId && (isSuccess || isSuccessBooking)) dispatch(fetchCurrentBook(bookId));
  }, [bookId, dispatch, isSuccess, isSuccessBooking]);

  useEffect(
    (): (() => void) => () => {
      dispatch(resetBook());
      dispatch(hideCommentToast());
      dispatch(hideBookingToast());
    },
    [dispatch]
  );

  if (isError || !currentBook) return null;

  return (
    <Wrapper>
      <BookContainer isLoading={isLoading}>
        <BookAbout book={currentBook} onBookedButtonPress={showModalForBooking} />
        <InfoSection>
          <BookRatingSection rating={currentBook.rating} />
          <FullInfoSection book={currentBook} />
          <CommentsSection comments={currentBook.comments} />
        </InfoSection>
        <ButtonContainer>
          <PrimaryButton
            onClick={showModalForRate}
            testId='button-rate-book'
            disabled={withMyComment}
            type={ButtonType.primaryButton}
            title={TitleVariant.addRating}
            stylesClass='buttonOnBookPage'
          />
        </ButtonContainer>
      </BookContainer>
    </Wrapper>
  );
};
