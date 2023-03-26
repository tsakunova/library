import { FC } from 'react';
import { EmptyStar } from 'assets/icons';
import { TitleVariant } from 'enums';
import { theme } from 'style/theme';
import { keyExtractor } from 'utils/key-extractor';

import { Container } from './book-rating.style';

type BookRatingProps = {
  rating?: number;
  stylesClass?: string;
  withStars?: boolean;
  onClick?: (value: number) => void;
};

export const BookRating: FC<BookRatingProps> = ({
  rating = 0,
  stylesClass,
  withStars = false,
  onClick = () => null,
}) => {
  const renderStars = () => {
    if (!rating && !withStars) return <p>{TitleVariant.notRating}</p>;

    return [...Array(5)].map((item, index) =>
      index < Math.floor(rating) ? (
        <span key={keyExtractor(index)} data-test-id='star'>
          <EmptyStar data-test-id='star-active' fill={theme.color.main.stars} onClick={() => onClick(index + 1)} />
        </span>
      ) : (
        <span key={keyExtractor(index)} data-test-id='star'>
          <EmptyStar fill={theme.color.main.white} onClick={() => onClick(index + 1)} />
        </span>
      )
    );
  };

  return (
    <Container className={stylesClass} data-test-id='rating'>
      {renderStars()}
    </Container>
  );
};
