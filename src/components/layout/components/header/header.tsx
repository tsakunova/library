import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoClevertec } from 'assets/icons';
import { NavigationMenu } from 'components/navigation-menu';
import { Wrapper } from 'index.style';
import { UserDTO } from 'types/types';

import { BurgerMenu } from './components/ burger-menu';
import { HeaderAuthorization } from './components/header-authorisation';
import { HeaderContainer, LeftHeaderContainer, LogoContainer, MenuContainer, Title } from './header.style';

export const Header: FC<{ user: UserDTO }> = ({ user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const burgerOpenHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Wrapper>
      <HeaderContainer>
        <LeftHeaderContainer>
          <Link to='/'>
            <LogoContainer>
              <LogoClevertec />
            </LogoContainer>
          </Link>
          <MenuContainer onClick={burgerOpenHandler} onMouseOut={burgerOpenHandler}>
            <BurgerMenu isOpen={isOpen} />
            <NavigationMenu isShowMenu={isOpen} isBurgerMenu={true} />
          </MenuContainer>

          <Title>Библиотека</Title>
        </LeftHeaderContainer>
        <HeaderAuthorization user={user} />
      </HeaderContainer>
    </Wrapper>
  );
};
