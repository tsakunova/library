import { FC } from 'react';
import { commentsNoAvatar } from 'assets/images';
import { AvatarImg } from 'components/avatar-img';
import { BookRating } from 'components/book-rating';
import { CommentDTO } from 'types/types';
import { getImageURL } from 'utils/get-image-url';

import { CommentContainer, CommentText, DateAndName, ShortInfoContainer } from './comment-item.styles';

type CommentProps = {
  comment: CommentDTO;
};

export const BookCommentItem: FC<CommentProps> = ({ comment }) => {
  const date = new Date(comment.createdAt).toLocaleDateString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <CommentContainer data-test-id='comment-wrapper'>
      <ShortInfoContainer>
        <AvatarImg
          size='32px'
          bgImage={comment.user.avatarUrl ? getImageURL(comment.user.avatarUrl) : commentsNoAvatar}
        />
        <DateAndName>
          <p data-test-id='comment-author'>
            {comment.user.firstName} {comment.user.lastName}
          </p>
          <p data-test-id='comment-date'>{date}</p>
        </DateAndName>
      </ShortInfoContainer>
      <BookRating rating={comment.rating} stylesClass='ratingInComments' />
      {comment.text && <CommentText data-test-id='comment-text'>{comment.text}</CommentText>}
    </CommentContainer>
  );
};
