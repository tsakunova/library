import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0;
  @media ${devices.tablet} {
    margin: 8px 0 13px;
  }
  @media ${devices.mobile} {
    margin: 3px 0 60px;
  }
`;
export const ButtonContainer = styled.div`
  width: 255px;
  .buttonInProfile {
    padding: 14px 0;
    border-radius: 30px;
    @media ${devices.mobile} {
      padding: 11px 0;
    }
    p {
      font: ${(props) => props.theme.fonts.subtitleLarge};
      @media ${devices.mobile} {
        font: ${(props) => props.theme.fonts.buttonSmall};
      }
    }
  }
  @media ${devices.tablet} {
    width: 306px;
  }
  @media ${devices.mobile} {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 52px;
  @media ${devices.mobile} {
    flex-direction: column;
    gap: ${(props) => `${props.theme.size.default}px`};
  }
`;
