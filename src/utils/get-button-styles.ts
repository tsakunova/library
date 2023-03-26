import { ButtonType, CardType, TitleVariant } from 'enums';

import { getDateString } from './time.utils';

export const getDateOff = (bookedTill?: string) => {
  if (!bookedTill) return '';
  const date = new Date(bookedTill);

  return `${getDateString(date.getDate(), true)}.${getDateString(date.getMonth())}`;
};

export const getButtonStyles = (typeCard: CardType, isBooked?: boolean, bookedTill?: string, hasMyComments = false) => {
  const bookedTitle = bookedTill ? `${TitleVariant.busy} ${getDateOff(bookedTill)}` : TitleVariant.booked;

  const getStyles = () => {
    switch (typeCard) {
      case CardType.main:
        return {
          buttonType: isBooked ? ButtonType.secondaryButton : ButtonType.primaryButton,
          buttonTitle: isBooked ? bookedTitle : TitleVariant.booking,
        };
      case CardType.history:
        return {
          buttonType: hasMyComments ? ButtonType.secondaryButton : ButtonType.primaryButton,
          buttonTitle: hasMyComments ? TitleVariant.editYourRating : TitleVariant.ratingTextareaPlaceholder,
        };
      case CardType.booking:
        return {
          buttonType: ButtonType.primaryButton,
          buttonTitle: TitleVariant.endBooking,
        };
      case CardType.delivery:
        return {
          buttonType: undefined,
          buttonTitle: getDateOff(bookedTill),
        };
      default:
        return {
          buttonType: undefined,
          buttonTitle: '',
        };
    }
  };
  const { buttonType, buttonTitle } = getStyles();

  return {
    buttonType,
    buttonTitle,
  };
};
