import { CardType } from 'enums';
import { getContentForBookingOverdue } from 'pages/books/components/book-card/book-card.utils';
import { UserFormType } from 'store/utils/types';
import { MainBookDTO } from 'types/types';
import { getButtonStyles } from 'utils/get-button-styles';
import { isDayBefore, isDayLater } from 'utils/time.utils';

import { useTypedSelector } from './use-typed-selector';

const getOverBlock = (type: CardType, book: MainBookDTO, isProfile: boolean) => {
  if (!book) return null;

  const isOverBooking = !!(isProfile && book.booking?.dateOrder);
  const isOverDelivery = !!(isProfile && book?.delivery?.dateHandedTo);
  const bookingFinish = book.booking?.dateOrder && isDayBefore(book.booking?.dateOrder);
  const deliveryFinish = book.delivery?.dateHandedTo && !isDayLater(book?.delivery?.dateHandedTo);

  switch (type) {
    case CardType.booking:
      return {
        isOver: isOverBooking && bookingFinish,
        overContent: getContentForBookingOverdue(type),
      };
    case CardType.delivery:
      return {
        isOver: isOverDelivery && deliveryFinish,
        overContent: getContentForBookingOverdue(type),
      };
    default:
      return null;
  }
};

export const useBookCardStyles = (type: CardType, book: MainBookDTO) => {
  const { booking, delivery, id } = book;
  const { userForm } = useTypedSelector(({ utils }) => utils);
  const userId = useTypedSelector(({ user }) => user.user?.id);
  const comments = useTypedSelector(({ user }) => user.user?.comments) || [];
  const hasComments = comments.some((item) => item.bookId === id);
  const isProfile = userForm?.type === UserFormType.edit;
  const isHistory = type === CardType.history;
  const isDisabled = !isHistory && ((!!(booking?.customerId !== userId) && !!booking) || !!delivery?.dateHandedTo);
  const isBooked = !!delivery || !!booking;
  const { buttonType, buttonTitle } = getButtonStyles(type, isBooked, delivery?.dateHandedTo, hasComments);

  const overBlock = getOverBlock(type, book, isProfile);

  return { buttonTitle, buttonType, isProfile, isHistory, overBlock, isDisabled, hasComments };
};
