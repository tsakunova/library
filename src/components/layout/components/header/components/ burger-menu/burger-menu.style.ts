import { devices } from 'consts';
import styled from 'styled-components';

export const BurgerMenuContainer = styled.div`
  display: none;

  @media ${devices.tablet} {
    display: block;
    padding: 2px;
  }
`;

export const BurgerLine = styled.span<{ isOpen: boolean }>`
  display: block;
  width: 27px;
  height: 2px;
  background-color: ${(props) => (props.isOpen ? 'transparent' : props.theme.color.main.dark)};
  border-radius: 2px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &::before,
  &::after {
    border-radius: 2px;
    position: absolute;
    content: '';
    width: 27px;
    height: 2px;
    top: 50%;
    background-color: ${(props) => props.theme.color.main.dark};
    transition: transform 0.2s ease-in-out;
  }
  &::after {
    transform: ${(props) => props.isOpen && 'rotate(45deg)'};
    top: ${(props) => (props.isOpen ? '50%' : '-7px')};
  }
  &::before {
    transform: ${(props) => props.isOpen && 'rotate(-45deg)'};
    top: ${(props) => (props.isOpen ? '50%' : '7px')};
  }
`;
