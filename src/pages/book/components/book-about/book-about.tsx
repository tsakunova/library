import { FC, SyntheticEvent } from 'react';
import { PrimaryButton } from 'components/buttons/primary-button';
import { useTypedSelector } from 'hooks/use-typed-selector';
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
} from './book-about.style';
import { ImagesSection } from './components';

type BookAboutProps = {
  book: FullBookDTO;
  onBookedButtonPress: (e: SyntheticEvent) => void;
};

export const BookAbout: FC<BookAboutProps> = ({
  book: { authors, title, images, description, booking, issueYear, delivery },
  onBookedButtonPress,
}) => {
  const { buttonType, buttonTitle } = getButtonStyles(!!delivery || !!booking, delivery?.dateHandedTo);
  const userId = useTypedSelector(({ login }) => login.user?.id);
  const isDisabled = (!!(booking?.customerId !== userId) && !!booking) || !!delivery?.dateHandedTo;
  const renderAuthors = () => authors?.map((item, index) => <span key={keyExtractor(index)}>{item} </span>);

  return (
    <BookAboutContainer>
      <ImagesSection images={images} />
      <ContentContainer>
        <h3 data-test-id='book-title'>{title}</h3>
        <AboutAuthor>
          {renderAuthors()}, {issueYear}
        </AboutAuthor>
        <ButtonContainer>
          <PrimaryButton
            onClick={onBookedButtonPress}
            testId='booking-button'
            stylesClass='buttonOnBookPage'
            type={buttonType}
            title={buttonTitle}
            disabled={isDisabled}
          />
        </ButtonContainer>
      </ContentContainer>

      <DescriptionSection>
        <BookSectionLayout title={BookSectionTitle.about}>
          {description?.split('\n').map((item, index) => (
            <ContentBook key={`content-${keyExtractor(index)}`}>{item}</ContentBook>
          ))}
        </BookSectionLayout>
      </DescriptionSection>
    </BookAboutContainer>
  );
};
