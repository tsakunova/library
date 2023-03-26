import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div<{ isShowMenu: boolean }>`
  font-size: 24px;
  display: flex;
  margin-top: 20px;

  @media ${devices.tablet} {
    display: none;
  }
`;

export const BurgerMenuContainer = styled.div<{ isShowMenu: boolean }>`
  display: none;
  position: absolute;
  transition: left 0.1s;
  top: 20px;
  z-index: 10;
  background-color: ${(props) => props.theme.color.grey.black5};
  left: 0;
  font-size: 24px;
  margin-top: 20px;
  width: 65.5vw;
  padding: ${(props) => `${props.theme.size.default * 2}px`};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.color.shadow.card};

  @media ${devices.tablet} {
    width: 502px;
    display: ${(props) => (props.isShowMenu ? 'flex' : 'none')};
    max-height: 87vh;
    overflow: auto;
  }
  @media ${devices.mobile} {
    width: 288px;
    padding: 32px 0 8px 0px;
  }
`;
