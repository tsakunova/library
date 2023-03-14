import React, { FC } from 'react';
import { CloseSVG } from 'assets/icons';
import styled from 'styled-components';

type Props = {
  onClick: () => void;
};

const CloseButtonContainer = styled.button`
  position: absolute;
  right: ${(props) => `${props.theme.size.default * 2}px`};
  top: ${(props) => `${props.theme.size.default * 2}px`};
  width: ${(props) => `${props.theme.size.default * 2}px`};
  height: ${(props) => `${props.theme.size.default * 2}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  background: ${(props) => props.theme.color.grey.black5};
  border: none;
  outline: none;
  & svg {
    width: 14px;
    height: 14px;
    & path {
      fill: ${(props) => props.theme.color.main.accent};
    }
  }
`;

export const CloseButton: FC<Props> = React.memo(({ onClick }) => (
  <CloseButtonContainer data-test-id='modal-close-button' onClick={onClick}>
    <CloseSVG />
  </CloseButtonContainer>
));
