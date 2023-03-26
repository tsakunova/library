import { FC } from 'react';
import { PROFILE_SECTION_TITLES } from 'consts';
import { CardType, EmptyTitles, ViewVariant } from 'enums';
import { BookCard } from 'pages/books/components/book-card';
import { MainBookDTO } from 'types/types';

import { EmptyBlock } from '../empty-block';
import { ProfileSectionTitle } from '../profile-section-title';

import { Container } from './taken-book-section.style';

export const TakenBookSection: FC<{ book: MainBookDTO | null }> = ({ book }) => (
  <Container>
    <ProfileSectionTitle text={PROFILE_SECTION_TITLES.taken} />
    {book ? (
      <BookCard book={book} view={ViewVariant.list} type={CardType.delivery} />
    ) : (
      <EmptyBlock title={EmptyTitles.taken} />
    )}
  </Container>
);
