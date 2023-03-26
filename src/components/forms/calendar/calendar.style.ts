import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 16px 8px;
  font: ${(props) => props.theme.fonts.infoLarge};
  background-color: ${(props) => props.theme.color.main.white};
  box-shadow: ${(props) => props.theme.color.shadow.card};
  border-radius: ${(props) => `${props.theme.size.default / 2}px`};
  width: 256px;
  min-height: 240px;
  margin: 0 auto;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectMonth = styled.select<{ bg: string }>`
  background-image: ${(props) => `url(${props.bg})`};
  background-repeat: no-repeat;
  background-position: right;
  max-width: 135px;
  width: 100%;
  position: relative;
  appearance: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: ${(props) => props.theme.color.grey.black40};
  border: none;
  outline: none;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
`;

export const PrevNextMonthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => `${props.theme.size.default}px`};
`;

export const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const WeekDayNames = styled.div`
  font: ${(props) => props.theme.fonts.infoLarge};
  color: ${(props) => props.theme.color.main.accent};
  padding: ${(props) => `${props.theme.size.default / 2}px`};
`;

export const Day = styled.div<{
  isCurrent: boolean;
  isNext: boolean;
  isActive: boolean;
  isWeekend: boolean;
  isWeekendNotActive: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${(props) => props.theme.fonts.infoSmall};
  color: ${(props) => {
    if (props.isActive) return props.theme.color.main.white;
    if (props.isCurrent) return props.theme.color.main.search;
    if (props.isNext) return props.theme.color.main.dark;
    if (props.isActive && props.isWeekend) return props.theme.color.main.search;

    return props.theme.color.grey.black40;
  }};
  cursor: ${(props) => {
    if (props.isNext || props.isActive || props.isCurrent) return 'pointer';

    return 'unset';
  }};
  background: ${(props) => {
    if (props.isWeekend) return props.theme.color.toast.negative;
    if (props.isActive) return props.theme.color.button.hover;

    return 'transparent';
  }};
  border-radius: ${(props) => (props.isWeekend || props.isActive) && '50%'};
  padding: ${(props) => `${props.theme.size.default / 2}px`};
`;

export const ButtonContainer = styled.button`
  background: none;
  outline: none;
  border: none;
`;
