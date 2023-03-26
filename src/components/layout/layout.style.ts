import { devices } from 'consts';
import { Wrapper } from 'index.style';
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
  display: grid;
  grid-template-columns: 285px auto;
  @media ${devices.tablet} {
    grid-template-columns: auto;
  }
`;

export const Overlay = styled.div<{ isShow: boolean }>`
  width: ${(props) => props.isShow && '100vw'};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  height: ${(props) => props.isShow && '100vh'};
  background-color: ${(props) => props.isShow && props.theme.color.main.dark30};
`;

export const MainWrapper = styled(Wrapper)`
  flex: 1;
`;
