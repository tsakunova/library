import { FC, useRef, useState } from 'react';
import { arrowDropDown, DownSVG, UpSVG } from 'assets/icons';

import {
  ButtonContainer,
  CalendarBody,
  CalendarHeader,
  Container,
  Day,
  PrevNextMonthContainer,
  SelectMonth,
  WeekDayNames,
} from './calendar.style';
import { areEqualDates, getMonthDataWithPrevAndNext, getNextDayForOrder, isClickableDay } from './calendar.utils';
import { DAYS, MONTH_NAMES_RU, MONTHS_IN_YEAR } from './const';

type CalendarProps = {
  selectedDate: Date | null;
  selectDate: (date: Date | null) => void;
};

export const Calendar: FC<CalendarProps> = ({ selectDate, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const nextAvailableDay = getNextDayForOrder(today);

  const monthSelectRef = useRef<HTMLSelectElement>(null);

  const monthData = getMonthDataWithPrevAndNext(Number(currentDate.getFullYear()), Number(currentDate.getMonth()));

  const onDayCalendarClick = (date: Date | null) => {
    const isClickable = isClickableDay(date);

    if (isClickable) {
      selectDate(date);
    }
  };

  const onPrevMonthClick = () => {
    selectDate(null);
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()));
  };

  const onNextMonthClick = () => {
    selectDate(null);
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()));
  };

  const onMonthChangeHandler = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), Number(monthSelectRef.current?.value)));
  };

  return (
    <Container data-test-id='calendar'>
      <CalendarHeader>
        <SelectMonth
          bg={arrowDropDown}
          data-test-id='month-select'
          ref={monthSelectRef}
          value={currentDate.getMonth()}
          onChange={onMonthChangeHandler}
        >
          {[...new Array(MONTHS_IN_YEAR)].map((_, index) => (
            <option key={MONTH_NAMES_RU[index]} value={index}>
              {MONTH_NAMES_RU[index]} {currentDate.getFullYear()}
            </option>
          ))}
        </SelectMonth>
        <PrevNextMonthContainer>
          <ButtonContainer data-test-id='button-prev-month' type='button' onClick={onPrevMonthClick}>
            <UpSVG />
          </ButtonContainer>
          <ButtonContainer data-test-id='button-next-month' type='button' onClick={onNextMonthClick}>
            <DownSVG />
          </ButtonContainer>
        </PrevNextMonthContainer>
      </CalendarHeader>
      <CalendarBody>
        {DAYS.map((day) => (
          <WeekDayNames key={day}>{day}</WeekDayNames>
        ))}
        {monthData.map((week) =>
          week.map((date) => (
            <Day
              isCurrent={areEqualDates(date!, currentDate) && areEqualDates(today, currentDate)}
              isNext={areEqualDates(date!, nextAvailableDay)}
              isActive={areEqualDates(date!, selectedDate!)}
              isWeekend={date?.getDay() === 6 || date?.getDay() === 0}
              isWeekendNotActive={
                (date?.getDay() === 6 || date?.getDay() === 0) &&
                areEqualDates(date, currentDate) &&
                areEqualDates(new Date(), currentDate)
              }
              data-test-id='day-button'
              onClick={() => onDayCalendarClick(date!)}
              key={date?.toString()}
            >
              {date?.getDate()}
            </Day>
          ))
        )}
      </CalendarBody>
    </Container>
  );
};
