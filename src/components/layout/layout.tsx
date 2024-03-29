import { FC, useCallback, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { BookBreadcrumbs } from 'components/book-breadcrumbs';
import { NavigationMenu } from 'components/navigation-menu';
import { PrivateRouter } from 'components/private/private';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { RouteNames } from 'types/enum';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Loader } from './components/loader';
import { ModalInApp } from './components/modal-in-app';
import { Toast } from './components/toast';
import { Container, MainContainer, MainWrapper, Overlay } from './layout.style';

export const Layout: FC = () => {
  const pathBook = useMatch(`/${RouteNames.books}/:category/:bookId`);
  const pathProfile = useMatch(`/${RouteNames.profile}/`);
  const withMenu = !pathBook && !pathProfile;
  const user = useTypedSelector(({ login }) => login.user);
  const [isOpenUserMenu, setIsOpenUserMenu] = useState<boolean>(false);
  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);
  const closeOverlay = useCallback(() => setIsOpenBurger(!isOpenBurger), [isOpenBurger]);
  const { modal, toast } = useTypedSelector((state) => state.utils);

  return (
    <Container isOpenMenu={isOpenBurger}>
      <Loader />
      {!!toast && <Toast />}
      {modal?.isShow && <ModalInApp />}
      <Overlay isShow={isOpenBurger} onClick={closeOverlay} />
      {user && (
        <Header
          isOpenUserMenu={isOpenUserMenu}
          setIsOpenUserMenu={setIsOpenUserMenu}
          user={user}
          setIsOpenBurger={setIsOpenBurger}
          isOpenBurger={isOpenBurger}
        />
      )}
      {pathBook && <BookBreadcrumbs />}
      <MainWrapper data-test-id='content'>
        <MainContainer>
          {withMenu && <NavigationMenu isBurgerMenu={false} />}
          <PrivateRouter />
        </MainContainer>
      </MainWrapper>
      <Footer />
    </Container>
  );
};
