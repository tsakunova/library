import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LogoClevertec, MenuSVG } from 'assets/icons';
import { Wrapper } from 'index.style';
import { UserDTO } from 'types/types';

import { HeaderAuthorization } from './components/header-authorization';
import { HeaderContainer, LeftHeaderContainer, LogoContainer, MenuContainer, Title } from './header.style';

export const Header: FC<{ user: UserDTO }> = ({ user }) => (
  <Wrapper>
    <HeaderContainer>
      <LeftHeaderContainer>
        <Link to='/'>
          <LogoContainer>
            <LogoClevertec />
          </LogoContainer>
          <MenuContainer>
            <MenuSVG />
          </MenuContainer>
        </Link>
        <Title>Библиотека</Title>
      </LeftHeaderContainer>
      <HeaderAuthorization user={user} />
    </HeaderContainer>
  </Wrapper>
);
