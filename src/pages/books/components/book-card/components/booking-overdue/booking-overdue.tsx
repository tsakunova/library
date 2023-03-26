import { FC } from 'react';
import { ErrorOverdueMessage, ErrorOverdueTitle } from 'enums';
import { Title } from 'pages/profile/components/empty-block/empty-block.style';
import styled from 'styled-components';

import { BookingOverdueContainer } from '../../book.card.style';

const Text = styled.p`
  font: ${(props) => props.theme.fonts.subtitleLarge};
  color: ${(props) => props.theme.color.main.white};
`;

export const BookingOverdue: FC<{ title?: ErrorOverdueTitle; message?: ErrorOverdueMessage }> = ({
  title,
  message,
}) => (
  <BookingOverdueContainer data-test-id='expired'>
    <Title>{title}</Title>
    <Text>{message}</Text>
  </BookingOverdueContainer>
);
