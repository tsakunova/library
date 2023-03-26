import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LogoClevertec } from 'assets/icons';
import { NavigationMenu } from 'components/navigation-menu';
import { TitleVariant } from 'enums';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Wrapper } from 'index.style';
import { UserFormType } from 'store/utils/types';

import { BurgerMenu } from './components/ burger-menu';
import { HeaderAuthorization } from './components/header-authorisation';
import { HeaderContainer, LeftHeaderContainer, LogoContainer, MenuContainer, Title } from './header.style';

type HeaderProps = {
  isOpenBurger: boolean;
  setIsOpenBurger: (value: boolean) => void;
  isOpenUserMenu: boolean;
  setIsOpenUserMenu: (value: boolean) => void;
};

export const Header: FC<HeaderProps> = ({ isOpenBurger, setIsOpenBurger, isOpenUserMenu, setIsOpenUserMenu }) => {
  const { user } = useTypedSelector(({ user }) => user);
  const { userForm } = useTypedSelector(({ utils }) => utils);
  const isProfile = userForm?.type === UserFormType.edit;
  const title = isProfile ? TitleVariant.profilePage : TitleVariant.library;

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

          <Title>{title}</Title>
        </LeftHeaderContainer>
        <HeaderAuthorization isOpen={isOpenUserMenu} setIsOpen={setIsOpenUserMenu} user={user} />
      </HeaderContainer>
    </Wrapper>
  );
};
