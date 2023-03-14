import { FC, useCallback, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { BookRating } from 'components/book-rating';
import { CloseButton } from 'components/buttons/close-button';
import { PrimaryButton } from 'components/buttons/primary-button';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { addCommentForCurrentBook } from 'store/comment/comment-action';
import { selectBookAndUserID } from 'store/selectors/comment-selector';
import { hideModal } from 'store/utils/utils-slice';
import { ButtonType, FormButtonType, TitleVariant, UserAPIFields } from 'types/enum';
import { AddCommentType } from 'types/types';

import { Container, StyledTextArea, SubTitle, Title } from './rating-modal.style';

export const RatingModal: FC<{ onClick: () => void }> = ({ onClick }) => {
  const { book, user } = useTypedSelector(selectBookAndUserID);
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, reset } = useForm({
    mode: 'all',
  });
  const addRatingHandler = useCallback((value: number) => {
    setRating(value);
  }, []);

  const onSubmit = (text: FieldValues) => {
    const comment = {
      ...text,
      rating,
      book,
      user,
    };

    dispatch(addCommentForCurrentBook(comment as unknown as AddCommentType));
    dispatch(hideModal());
    reset();
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
          title={TitleVariant.addRatingButton}
          stylesClass={ButtonType.primaryButton}
        />
      </form>
    </Container>
  );
};
