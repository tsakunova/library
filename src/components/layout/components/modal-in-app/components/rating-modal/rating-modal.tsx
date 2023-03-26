import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { BookRating } from 'components/book-rating';
import { CloseButton } from 'components/buttons/close-button';
import { PrimaryButton } from 'components/buttons/primary-button';
import { ButtonType, FormButtonType, TitleVariant, UserAPIFields } from 'enums';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { addCommentForCurrentBook, editCommentForCurrentBook } from 'store/comment/comment-action';
import { fetchCurrentBook } from 'store/current-book/current-book-actions';
import { resetBook } from 'store/current-book/current-book-slice';
import { selectBookWithMyRating } from 'store/selectors/book-with-my-rating';
import { selectBookAndUserID } from 'store/selectors/comment-selector';
import { hideModal } from 'store/utils/utils-slice';
import { AddCommentType } from 'types/actions.types';

import { Container, StyledTextArea, SubTitle, Title } from './rating-modal.style';

export const RatingModal: FC<{ onClick: () => void; data?: string }> = ({ onClick, data }) => {
  const dispatch = useAppDispatch();
  const { bookId } = useParams();
  const myComment = useTypedSelector(selectBookWithMyRating);
  const [rating, setRating] = useState<number>(myComment?.rating || 5);
  const { book, user } = useTypedSelector(selectBookAndUserID);

  useEffect(() => {
    if (data && !bookId) {
      dispatch(fetchCurrentBook(data));
    }
  }, [bookId, data, dispatch]);

  const title = myComment ? TitleVariant.editYourRating : TitleVariant.addRatingButton;

  const defaultValues: FieldValues = useMemo(
    () => ({
      [UserAPIFields.commentText]: myComment?.text,
    }),
    [myComment?.text]
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
    mode: 'all',
  });

  useEffect(() => {
    if (data) {
      if (myComment?.rating) setRating(myComment?.rating);
      reset({ ...defaultValues });
    }
  }, [data, defaultValues, myComment?.rating, reset, user]);

  useEffect(
    () => () => {
      if (!bookId) {
        dispatch(resetBook());
      }
      reset();
      dispatch(hideModal());
    },
    [bookId, dispatch, reset]
  );

  const addRatingHandler = useCallback((value: number) => {
    setRating(value);
  }, []);

  const onSubmit = (value: FieldValues) => {
    const text = value.text as unknown as string;
    const comment: AddCommentType = {
      data: {
        text,
        rating,
        book: book.toString(),
        user,
      },
    };

    if (myComment?.id) {
      dispatch(editCommentForCurrentBook({ commentId: myComment.id, ...comment }));
    } else {
      dispatch(addCommentForCurrentBook(comment));
    }
    dispatch(hideModal());
  };

  return (
    <Container data-test-id='modal-rate-book'>
      <CloseButton onClick={onClick} />
      <Title data-test-id='modal-title'>{TitleVariant.addRatingTitle}</Title>
      <SubTitle>{TitleVariant.yourRating}</SubTitle>
      <BookRating rating={rating} onClick={addRatingHandler} stylesClass='addRating' withStars={true} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledTextArea
          data-test-id='comment'
          {...register(UserAPIFields.commentText)}
          rows={5}
          maxLength={1000}
          placeholder={TitleVariant.ratingTextareaPlaceholder}
        />
        <PrimaryButton
          testId='button-comment'
          handlerType={FormButtonType.submit}
          title={title}
          stylesClass={ButtonType.primaryButton}
        />
      </form>
    </Container>
  );
};
