import { CardType, ErrorOverdueMessage, ErrorOverdueTitle, ViewVariant } from 'enums';

import { ListBookImage, ListContent, ListViewCard } from './book-card-list.style';
import { WindowBookImage, WindowContent, WindowViewCard } from './book-card-window.style';

export const getStyledComponentForBookCard = (view: ViewVariant) =>
  view === ViewVariant.window
    ? { card: WindowViewCard, content: WindowContent, image: WindowBookImage }
    : { card: ListViewCard, content: ListContent, image: ListBookImage };

export const getContentForBookingOverdue = (type: CardType) => {
  switch (type) {
    case CardType.booking:
      return {
        title: ErrorOverdueTitle.reserved,
        message: ErrorOverdueMessage.reserved,
      };
    case CardType.delivery:
      return {
        title: ErrorOverdueTitle.taken,
        message: ErrorOverdueMessage.taken,
      };
    default:
      return {
        title: ErrorOverdueTitle.taken,
        message: ErrorOverdueMessage.taken,
      };
  }
};
