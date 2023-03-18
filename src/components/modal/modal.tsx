import { FC, ReactNode, SyntheticEvent } from 'react';

import { Container } from './modal.style';

export const Modal: FC<{ children: ReactNode }> = ({ children }) => (
  <Container onClick={(e: SyntheticEvent) => e.stopPropagation()}>{children}</Container>
);
