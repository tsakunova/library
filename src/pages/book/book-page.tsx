import { FC, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PrimaryButton } from 'components/buttons/primary-button';
import { useOnMount } from 'hooks/use-on-mount';
import { Wrapper } from 'index.style';
import { MOCK_BOOK, MOCK_COMMENTS } from 'mocks/book.mock';
import { ButtonType, TitleVariant } from 'types/enum';
import { CommentDTO } from 'types/types';

import { BookAbout } from './components/book-about';
import { BookRatingSection } from './components/book-rating';
import { CommentsSection } from './components/comments';
import { FullInfoSection } from './components/full-info';
import { BookContainer, ButtonContainer, InfoSection } from './book-page.style';

export const BookPage: FC = () => {
  const params = useParams();

  const [comments, setComments] = useState<CommentDTO[]>([]);
  const currentBook = MOCK_BOOK;

  useOnMount(() => {
    setComments(MOCK_COMMENTS);
  });

  const pressBookingButton = useCallback(() => console.log(currentBook.id), [currentBook.id]);

  return (
    <Wrapper>
      <BookContainer>
        <BookAbout book={currentBook} onBookedButtonPress={pressBookingButton} />
        <InfoSection>
          <BookRatingSection rating={currentBook.rating!} />
          <FullInfoSection book={currentBook} />
          <CommentsSection comments={comments} />
        </InfoSection>
        <ButtonContainer>
          <PrimaryButton
            type={ButtonType.primaryButton}
            title={TitleVariant.addRating}
            stylesClass='buttonOnBookPage'
          />
        </ButtonContainer>
      </BookContainer>
    </Wrapper>
  );
};
