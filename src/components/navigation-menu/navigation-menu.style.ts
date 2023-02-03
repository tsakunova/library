import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  font-size: 24px;
  display: flex;
  margin-top: 20px;

  @media ${devices.tablet} {
    display: none;
  }
`;
