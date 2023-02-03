import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  display: flex;
  gap: 42px;
  @media ${devices.tablet} {
    gap: 46px;
  }
  @media ${devices.mobile} {
    gap: unset;
  }
`;
export const MainContainer = styled.div`
  flex: 1 0 auto;
  display: grid;
  grid-template-columns: 285px auto;
  @media ${devices.tablet} {
    grid-template-columns: auto;
  }
`;
