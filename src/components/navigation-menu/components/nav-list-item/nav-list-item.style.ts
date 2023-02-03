import styled from 'styled-components';

export const NavListItemLi = styled.li`
  margin-bottom: 40px;
  font: ${(props) => props.theme.fonts.desktopH5};
  cursor: pointer;
  position: relative;
`;

export const CurrentActiveLink = styled.div`
  position: relative;
  width: 255px;
  svg {
    position: absolute;
    top: 0;
    right: 36px;
    path {
      fill: ${(props) => props.theme.color.main.accent};
    }
  }
  & .mainLink {
    &::after {
      display: flex;
      position: absolute;
      content: '';
      height: 1px;
      background: ${(props) => props.theme.color.main.accent};
      top: 38px;
      left: 0;
      right: 0;
      width: 0%;
      transition: 0.5s linear;
    }
    &:hover {
      &::after {
        width: 90%;
      }
    }
    &.active {
      position: relative;
      color: ${(props) => props.theme.color.main.accent};
    }
  }
`;
