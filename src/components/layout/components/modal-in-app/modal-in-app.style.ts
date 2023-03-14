import { Overlay } from 'components/layout/layout.style';
import styled from 'styled-components';

export const OverlayForModal = styled(Overlay)<{ isShow: boolean }>`
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  backdrop-filter: blur(10px);
  align-items: center;
`;
