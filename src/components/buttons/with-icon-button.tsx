import React, { FC } from 'react';
import styled from 'styled-components';
import { TitleVariant } from 'types/enum';

type Props = {
  title: TitleVariant;
  icon: FC;
};

const WithIconButtonContainer = styled.button`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => `${props.theme.size.default / 2}px`};
  padding: ${(props) => props.theme.size.button.paddingS};
  border-radius: ${(props) => props.theme.size.button.borderRadius};
  background-color: ${(props) => props.theme.color.main.white};
  box-shadow: ${(props) => props.theme.color.shadow.card};
  border: none;
  cursor: pointer;
  & svg {
    width: ${(props) => `${props.theme.size.default}px`};
    height: ${(props) => `${props.theme.size.default}px`};
    & path {
      fill: ${(props) => props.theme.color.grey.black40};
    }
  }
  & p {
    color: ${(props) => props.theme.color.grey.black40};
    font: ${(props) => props.theme.fonts.bodySmall};
    letter-spacing: 0.1px;
  }
  &:hover {
    box-shadow: ${(props) => props.theme.color.shadow.button};
  }
`;

export const WithIconButton: FC<Props> = React.memo(({ title, icon: Icon }) => (
  <WithIconButtonContainer type='button'>
    <Icon />
    <p>{title}</p>
  </WithIconButtonContainer>
));
