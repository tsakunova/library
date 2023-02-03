import React, { FC, useCallback } from 'react';
import { EmptyStar } from 'assets/icons';
import { theme } from 'style/theme';
import { TitleVariant } from 'types/enum';
import { keyExtractor } from 'utils/key-extractor';

import { Container } from './book-rating.style';

type BookRatingProps = {
  rating?: number;
  stylesClass?: string;
};

export const BookRating: FC<BookRatingProps> = ({ rating, stylesClass }) => {
  const renderStars = useCallback(
    () =>
      [...Array(5)].map((item, index) =>
        index < Math.round(rating!) ? (
          <EmptyStar fill={theme.color.main.stars} key={keyExtractor(index)} />
        ) : (
          <EmptyStar fill={theme.color.main.white} key={keyExtractor(index)} />
        )
      ),
    [rating]
  );

  return <Container className={stylesClass}>{rating ? renderStars() : <p>{TitleVariant.notRating}</p>}</Container>;
};
