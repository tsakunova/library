import { ButtonType, TitleVariant } from 'types/enum';

import { getDateString } from './time.utils';

const getDateOff = (bookedTill: string) => {
  const date = new Date(bookedTill);

  return `${getDateString(date.getDate(), true)}.${getDateString(date.getMonth())}`;
};

export const getButtonStyles = (isBooked?: boolean, bookedTill?: string) => {
  const buttonType = isBooked ? ButtonType.secondaryButton : ButtonType.primaryButton;

  const bookedTitle = bookedTill ? `${TitleVariant.busy} ${getDateOff(bookedTill)}` : TitleVariant.booked;

  const buttonTitle = isBooked ? bookedTitle : TitleVariant.booking;

  return {
    buttonType,
    buttonTitle,
  };
};
