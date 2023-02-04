import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DefaultButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => `${props.theme.size.default}px`};
`;

export const ButtonContainer = styled(DefaultButtonContainer)<{ isVisibleMobile: boolean }>`
  display: ${(props) => (props.isVisibleMobile ? 'none' : 'flex')};
  @media ${devices.mobile} {
    display: ${(props) => (props.isVisibleMobile ? 'flex' : 'none')};
  }
`;
