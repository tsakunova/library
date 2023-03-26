import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  height: 218px;
  width: 100%;
  padding: ${(props) => `${props.theme.size.default}px `};
  background: ${(props) => props.theme.color.main.empty};
  border-radius: 10px;
  opacity: 0.7;
  backdrop-filter: blur(10px);
`;

export const Title = styled.h3`
  font: ${(props) => props.theme.fonts.h3};
  color: ${(props) => props.theme.color.main.white};
  @media ${devices.mobile} {
    font: ${(props) => props.theme.fonts.mobileH3};
  }
`;
