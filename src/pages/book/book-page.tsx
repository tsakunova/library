import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PrimaryButton } from 'components/buttons/primary-button';
import { ModalType } from 'components/layout/components/modal-in-app/enum';
import { ToastMessages, ToastType } from 'components/layout/components/toast/toast.enum';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useModal } from 'hooks/use-modal';
import { useToast } from 'hooks/use-toast';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Wrapper } from 'index.style';
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
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useTypedSelector((state) => state.currentBook);
  const currentBook = useTypedSelector(selectBookWithSortedCommentsByDate);
  const withMyComment = useTypedSelector(selectBookWithMyRating);

  useToast(ToastType.positive, ToastMessages.addRatingSuccess, isSuccess);
  useToast(ToastType.negative, ToastMessages.addRatingError, isErrorComment);
  useToast(ToastType.negative, ToastMessages.mainError, isError);

  const { isShow, setIsShow } = useModal(ModalType.rating);

  const showModalForRate = useCallback(() => {
    setIsShow(true);
    dispatch(setModal({ isShow, modalType: ModalType.rating }));
  }, [dispatch, isShow, setIsShow]);

  useEffect(() => {
    if (bookId) dispatch(fetchCurrentBook(bookId));
  }, [bookId, dispatch]);

  useEffect(() => {
    if (isSuccess && bookId) dispatch(fetchCurrentBook(bookId));
  }, [bookId, dispatch, isSuccess]);

  useEffect(
    (): (() => void) => () => {
      dispatch(resetBook());
      dispatch(hideCommentToast());
    },
    [dispatch]
  );

  if (isError || !currentBook) return null;

  return (
    <Wrapper>
      <BookContainer isLoading={isLoading}>
        <BookAbout book={currentBook} onBookedButtonPress={() => {}} />
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
