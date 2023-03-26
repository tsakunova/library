import { devices } from 'consts';
import { Wrapper } from 'index.style';
import styled from 'styled-components';

export const Container = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 92px;
  @media ${devices.tablet} {
    gap: 64px;
  }
  @media ${devices.mobile} {
    gap: 42px;
  }
`;
