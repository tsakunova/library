import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => `${props.theme.size.default * 2}px`};
  padding: 48px 56px;
  margin: 0 auto;
  @media ${devices.mobile} {
    padding: 42px 16px 32px;
    gap: 24px;
  }
  & .addRating {
    gap: 19px;
    align-items: center;
    justify-content: center;
    @media ${devices.mobile} {
      gap: ${(props) => `${props.theme.size.default}px`};
    }
    & svg {
      cursor: pointer;
      width: 33px;
      height: 33px;
      @media ${devices.mobile} {
        width: 26px;
        height: 26px;
      }
    }
  }
`;
export const Title = styled.h4`
  font: ${(props) => props.theme.fonts.h4};
  text-align: center;
  @media ${devices.mobile} {
    font: ${(props) => props.theme.fonts.mobileH3};
  }
`;

export const SubTitle = styled.p`
  font: ${(props) => props.theme.fonts.subtitleLarge};
  text-align: center;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 132px;
  padding: 19px 12px;
  background-color: ${(props) => props.theme.color.grey.black5};
  font: ${(props) => props.theme.fonts.bodyLarge};
  border: none;
  outline: none;
  resize: none;
  margin-bottom: 52px;
  @media ${devices.mobile} {
    margin-bottom: 44px;
  }
  ::placeholder {
    font: ${(props) => props.theme.fonts.bodySmall};
    color: ${(props) => props.theme.color.grey.black40};
  }
`;
