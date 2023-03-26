import { FC, SyntheticEvent, useCallback, useMemo } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { CoverCat } from 'assets/icons';
import { BookRating } from 'components/book-rating';
import { PrimaryButton } from 'components/buttons/primary-button';
import { ModalType } from 'components/layout/components/modal-in-app/enum';
import { CardType, FormButtonType, RouteNames, ViewVariant } from 'enums';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useBookCardStyles } from 'hooks/use-book-card-styles';
import { useModal } from 'hooks/use-modal';
import { deleteBooking } from 'store/booking/booking-action';
import { fetchUser } from 'store/user/user-action';
import { MainBookDTO } from 'types/types';
import { getDateOff } from 'utils/get-button-styles';
import { getImageURL } from 'utils/get-image-url';

import { MainAboutBlock } from './components/book-about-main';
import { BookingOverdue } from './components/booking-overdue';
import { DateOfReturn } from './book.card.style';
import { getStyledComponentForBookCard } from './book-card.utils';
import { ListAbout, ListButtonContainer, ListOther } from './book-card-list.style';
import { WindowAbout, WindowButtonContainer, WindowOther } from './book-card-window.style';

type BookProps = {
  book: MainBookDTO;
  view: ViewVariant;
  type?: CardType;
};

export const BookCard: FC<BookProps> = ({ book, view, type = CardType.main }) => {
  const dispatch = useAppDispatch();
  const { category } = useParams();
  const { image, id, rating, title, authors, booking, delivery } = book;
  const { buttonTitle, buttonType, isProfile, isHistory, overBlock, isDisabled } = useBookCardStyles(type, book);

  const { card: Card, content: Content, image: Image } = getStyledComponentForBookCard(view);

  const imageUrl = image && typeof image === 'object' ? image.url : image;

  const { showModal: showModalForBooking } = useModal(ModalType.booking, book);
  const { showModal: showModalForRate } = useModal(ModalType.rating, id.toString());

  const bookingHandler = useCallback(
    async (e: SyntheticEvent) => {
      if (isProfile) {
        e.preventDefault();
        e.stopPropagation();
        if (booking) await dispatch(deleteBooking(booking.id));
        await dispatch(fetchUser());
      } else {
        showModalForBooking(e);
      }
    },
    [booking, dispatch, isProfile, showModalForBooking]
  );

  const addOrEditReview = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      showModalForRate(e);
    },
    [showModalForRate]
  );

  const onClickHandler = useMemo(
    () => (isHistory ? addOrEditReview : bookingHandler),
    [addOrEditReview, bookingHandler, isHistory]
  );

  const buttonTestId = useMemo(() => (isHistory ? 'history-review-button' : 'booking-button'), [isHistory]);

  return (
    <Card data-test-id='card'>
      <Content>
        <NavLink to={`/${RouteNames.books}/${category ? category : RouteNames.booksAll}/${id}`}>
          <Image className='bookImage'>
            {imageUrl ? <img alt={title} src={getImageURL(imageUrl)} /> : <CoverCat />}
          </Image>
          {view === ViewVariant.window ? (
            <WindowOther>
              <BookRating rating={rating} stylesClass='ratingInCard' />
              <WindowAbout>
                <MainAboutBlock authors={authors} title={title} />
              </WindowAbout>
              <WindowButtonContainer>
                <PrimaryButton
                  testId={buttonTestId}
                  onClick={onClickHandler}
                  type={buttonType}
                  title={buttonTitle}
                  disabled={isDisabled}
                />
              </WindowButtonContainer>
            </WindowOther>
          ) : (
            <ListOther>
              <ListAbout>
                <MainAboutBlock authors={authors} title={title} />
              </ListAbout>
              <ListButtonContainer>
                <BookRating rating={rating} stylesClass='ratingInHome' />
                {type === CardType.delivery ? (
                  <DateOfReturn type={FormButtonType.submit}>
                    Возврат {delivery && getDateOff(delivery?.dateHandedTo)}
                  </DateOfReturn>
                ) : (
                  <PrimaryButton
                    testId={type === CardType.booking ? 'cancel-booking-button' : 'booking-button'}
                    onClick={bookingHandler}
                    type={buttonType}
                    title={buttonTitle}
                    disabled={isDisabled}
                  />
                )}
              </ListButtonContainer>
            </ListOther>
          )}
        </NavLink>
      </Content>
      {overBlock?.isOver && (
        <BookingOverdue title={overBlock.overContent?.title} message={overBlock.overContent?.message} />
      )}
    </Card>
  );
};
