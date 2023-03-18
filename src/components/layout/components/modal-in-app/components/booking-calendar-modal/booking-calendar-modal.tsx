import { FC, useCallback, useState } from 'react';
import { CloseButton } from 'components/buttons/close-button';
import { PrimaryButton } from 'components/buttons/primary-button';
import { Calendar } from 'components/forms/calendar/calendar';
import { getDateWithCurrentTimeZone } from 'components/forms/calendar/calendar.utils';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { addBooking, deleteBooking, editBooking } from 'store/booking/booking-action';
import { selectBookAndUserID } from 'store/selectors/comment-selector';
import { hideModal } from 'store/utils/utils-slice';
import { BookingType } from 'types/actions.types';
import { ButtonType, FormButtonType, TitleVariant } from 'types/enum';
import { FullBookDTO, MainBookDTO } from 'types/types';

import { ButtonContainer, Container, Title } from './booking-calendar-modal.style';

export const BookingCalendarModal: FC<{ onClick: () => void; data?: FullBookDTO | MainBookDTO }> = ({
  onClick,
  data,
}) => {
  const dispatch = useAppDispatch();
  const { user } = useTypedSelector(selectBookAndUserID);
  const [selectedDate, setSelectedDay] = useState<Date | null>(
    data?.booking?.dateOrder ? new Date(data?.booking?.dateOrder) : null
  );
  const [isEditOpen, setIsEditOpen] = useState(!!data?.booking);

  const titleText = data?.booking ? TitleVariant.calendarTitleEdit : TitleVariant.calendarTitle;

  const setSelectedDayHandler = useCallback(
    (value: Date | null) => {
      if (data?.booking) {
        setIsEditOpen(false);
      }
      setSelectedDay(value);
    },
    [data?.booking]
  );

  const onSubmit = useCallback(() => {
    const dateOrder = getDateWithCurrentTimeZone(selectedDate!);
    const value: BookingType = {
      order: true,
      dateOrder,
      book: data?.id.toString(),
      customer: user,
    };

    if (data?.booking) {
      const editedData = { ...value, bookingId: data.booking.id };

      dispatch(editBooking(editedData));
    } else {
      dispatch(addBooking(value));
    }
    dispatch(hideModal());
  }, [data?.booking, data?.id, dispatch, selectedDate, user]);

  const onDelete = useCallback(() => {
    dispatch(deleteBooking(data?.booking?.id as number));
    dispatch(hideModal());
  }, [data?.booking?.id, dispatch]);

  return (
    <Container data-test-id='booking-modal'>
      <CloseButton onClick={onClick} />
      <Title data-test-id='modal-title'>{titleText}</Title>

      <Calendar selectDate={setSelectedDayHandler} selectedDate={selectedDate} />
      <ButtonContainer>
        <PrimaryButton
          onClick={onSubmit}
          disabled={!selectedDate || isEditOpen}
          testId='booking-button'
          handlerType={FormButtonType.button}
          title={TitleVariant.booking}
          stylesClass={ButtonType.primaryButton}
        />
        {data?.booking && (
          <PrimaryButton
            onClick={onDelete}
            testId='booking-cancel-button'
            handlerType={FormButtonType.button}
            title={TitleVariant.endBooking}
            stylesClass={ButtonType.secondaryButton}
          />
        )}
      </ButtonContainer>
    </Container>
  );
};
