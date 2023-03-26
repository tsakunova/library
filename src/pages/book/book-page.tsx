import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PrimaryButton } from 'components/buttons/primary-button';
import { ModalType } from 'components/layout/components/modal-in-app/enum';
import { ToastType, ToastVariant } from 'components/toast/toast.enum';
import { ButtonType, TitleVariant } from 'enums';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useModal } from 'hooks/use-modal';
import { useToast } from 'hooks/use-toast';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Wrapper } from 'index.style';
import { fetchCategories } from 'store/categories/categories-actions';
import { fetchCurrentBook } from 'store/current-book/current-book-actions';
import { resetBook } from 'store/current-book/current-book-slice';
import { selectBookWithMyRating } from 'store/selectors/book-with-my-rating';
import { selectBookWithSortedCommentsByDate } from 'store/selectors/current-book-selector';
import { fetchUser } from 'store/user/user-action';
import { FullBookDTO } from 'types/types';

import { BookAbout } from './components/book-about';
import { BookRatingSection } from './components/book-rating';
import { CommentsSection } from './components/comments';
import { FullInfoSection } from './components/full-info';
import { BookContainer, ButtonContainer, InfoSection } from './book-page.style';

export const BookPage: FC = () => {
  const { bookId } = useParams();
  const { isSuccess, isError: isErrorComment, toastType: toastTypeRate } = useTypedSelector((state) => state.comment);
  const {
    isSuccess: isSuccessBooking,
    isError: isErrorBooking,
    toastType,
  } = useTypedSelector((state) => state.booking);
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useTypedSelector((state) => state.currentBook);
  const currentBook = useTypedSelector(selectBookWithSortedCommentsByDate);
  const myComment = useTypedSelector(selectBookWithMyRating);

  const titleForRateButton = myComment ? TitleVariant.editYourRating : TitleVariant.addRating;

  useToast(ToastVariant.positive, isSuccess, toastTypeRate!);
  useToast(ToastVariant.negative, isErrorComment, toastTypeRate!);
  useToast(ToastVariant.positive, isSuccessBooking, toastType!);
  useToast(ToastVariant.negative, isErrorBooking, toastType!);
  useToast(ToastVariant.negative, isError, ToastType.main);

  const { showModal: showModalForBooking } = useModal(ModalType.booking, currentBook as FullBookDTO);
  const { showModal: showModalForRate } = useModal(ModalType.rating, bookId);

  useEffect(() => {
    if (bookId) {
      dispatch(fetchCurrentBook(bookId));
      dispatch(fetchUser());
      dispatch(fetchCategories());
    }
  }, [bookId, dispatch]);

  useEffect(() => {
    if (bookId && (isSuccess || isSuccessBooking)) dispatch(fetchCurrentBook(bookId));
  }, [bookId, dispatch, isSuccess, isSuccessBooking]);

  useEffect(
    () => () => {
      dispatch(resetBook());
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
            type={myComment ? ButtonType.secondaryButton : ButtonType.primaryButton}
            title={titleForRateButton}
            stylesClass='buttonOnBookPage'
          />
        </ButtonContainer>
      </BookContainer>
    </Wrapper>
  );
};
