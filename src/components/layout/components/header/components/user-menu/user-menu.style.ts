import { devices } from 'consts';
import styled from 'styled-components';

export const UserMenuContainer = styled.div<{ isShowMenu: boolean }>`
  width: 270px;
  display: ${(props) => (props.isShowMenu ? 'flex' : 'none')};
  flex-direction: column;
  gap: ${(props) => `${props.theme.size.default * 2}px`};
  max-height: 87vh;
  padding: 32px 24px;
  position: absolute;
  transition: all 0.1s;
  right: 0px;
  z-index: 10;
  background-color: ${(props) => props.theme.color.main.white};
  top: 70px;
  border-radius: 0px 0px 10px 10px;
  box-shadow: ${(props) => props.theme.color.shadow.header};

  @media ${devices.tablet} {
    display: none;
  }
`;

export const MenuItem = styled.div`
  font: ${(props) => props.theme.fonts.mobileH3};
  color: ${(props) => props.theme.color.main.dark};
  text-align: right;
  cursor: pointer;
`;
