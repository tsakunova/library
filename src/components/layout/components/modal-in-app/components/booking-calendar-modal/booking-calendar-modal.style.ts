import styled from 'styled-components';

export const Container = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: ${(props) => (props.isActive ? '64px' : '-200px')};
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.1s ease-in-out;
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
`;
