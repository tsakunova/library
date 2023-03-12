import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LogoClevertec } from 'assets/icons';
import { NavigationMenu } from 'components/navigation-menu';
import { Wrapper } from 'index.style';
import { UserAPI } from 'types/types';

import { BurgerMenu } from './components/ burger-menu';
import { HeaderAuthorization } from './components/header-authorisation';
import { HeaderContainer, LeftHeaderContainer, LogoContainer, MenuContainer, Title } from './header.style';

type HeaderProps = {
  user: UserAPI | null;
  isOpenBurger: boolean;
  setIsOpenBurger: (value: boolean) => void;
  isOpenUserMenu: boolean;
  setIsOpenUserMenu: (value: boolean) => void;
};

export const Header: FC<HeaderProps> = ({ user, isOpenBurger, setIsOpenBurger, isOpenUserMenu, setIsOpenUserMenu }) => {
  if (!user) return null;
  const burgerOpenHandler = () => {
    setIsOpenBurger(!isOpenBurger);
  };

  return (
    <Wrapper>
      <HeaderContainer>
        <LeftHeaderContainer>
          <Link to='/'>
            <LogoContainer>
              <LogoClevertec />
            </LogoContainer>
          </Link>
          <MenuContainer onClick={burgerOpenHandler}>
            <BurgerMenu isOpen={isOpenBurger} />
            <NavigationMenu
              data-test-id='burger-navigation'
              setIsShowMenu={setIsOpenBurger}
              isShowMenu={isOpenBurger}
              isBurgerMenu={true}
            />
          </MenuContainer>

          <Title>Библиотека</Title>
        </LeftHeaderContainer>
        <HeaderAuthorization isOpen={isOpenUserMenu} setIsOpen={setIsOpenUserMenu} user={user} />
      </HeaderContainer>
    </Wrapper>
  );
};
