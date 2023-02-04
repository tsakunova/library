import { FC } from 'react';
import { CoverCat } from 'assets/icons';
import { PrimaryButton } from 'components/buttons/primary-button';
import { BookSectionTitle } from 'types/enum';
import { FullBookDTO } from 'types/types';
import { getButtonStyles } from 'utils/get-button-styles';
import { keyExtractor } from 'utils/key-extractor';

import { BookSectionLayout } from '../book-section-layout';

import {
  AboutAuthor,
  BookAboutContainer,
  ButtonContainer,
  ContentBook,
  ContentContainer,
  DescriptionSection,
  ImageContainer,
} from './book-about.style';

type BookAboutProps = {
  book: FullBookDTO;
  onBookedButtonPress: () => void;
};

export const BookAbout: FC<BookAboutProps> = ({
  book: { author, title, imageLink, about, isBooked, bookedTill, publishingYear },
  onBookedButtonPress,
}) => {
  const { buttonType, buttonTitle } = getButtonStyles(isBooked, bookedTill!);

  return (
    <BookAboutContainer>
      <ImageContainer>{imageLink ? <img alt={title} src={imageLink} /> : <CoverCat />}</ImageContainer>
      <ContentContainer>
        <h3>{title}</h3>
        <AboutAuthor>
          {author}, {publishingYear}
        </AboutAuthor>
        <ButtonContainer>
          <PrimaryButton
            stylesClass='buttonOnBookPage'
            type={buttonType}
            title={buttonTitle}
            disabled={isBooked && !!bookedTill}
          />
        </ButtonContainer>
      </ContentContainer>

      <DescriptionSection>
        <BookSectionLayout title={BookSectionTitle.about}>
          {about.split('\n').map((item, index) => (
            <ContentBook key={`content-${keyExtractor(index)}`}>{item}</ContentBook>
          ))}
        </BookSectionLayout>
      </DescriptionSection>
    </BookAboutContainer>
  );
};
