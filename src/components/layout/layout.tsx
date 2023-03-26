import { FC, useCallback, useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { BookBreadcrumbs } from 'components/book-breadcrumbs';
import { NavigationMenu } from 'components/navigation-menu';
import { PrivateRouter } from 'components/private/private';
import { RouteNames } from 'enums';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { selectLoading } from 'store/selectors/loading-selector';

import { Toast } from '../toast';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Loader } from './components/loader';
import { ModalInApp } from './components/modal-in-app';
import { Container, MainContainer, MainWrapper, Overlay } from './layout.style';

export const Layout: FC = () => {
  const pathBook = useMatch(`/${RouteNames.books}/:category/:bookId`);
  const pathProfile = useMatch(`/${RouteNames.profile}/`);
  const withMenu = !pathBook && !pathProfile;
  const { user } = useTypedSelector(({ login }) => login);
  const [isOpenUserMenu, setIsOpenUserMenu] = useState<boolean>(false);
  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);
  const closeOverlay = useCallback(() => setIsOpenBurger(!isOpenBurger), [isOpenBurger]);
  const { modal, toast } = useTypedSelector((state) => state.utils);
  const isLoading = useTypedSelector(selectLoading);

  useEffect(() => {
    if (isLoading || isOpenBurger || isOpenUserMenu || modal?.isShow) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading, isOpenBurger, isOpenUserMenu, modal?.isShow]);

  return (
    <Container>
      <Loader />
      {!!toast && <Toast />}
      {modal?.isShow && <ModalInApp />}
      {isOpenBurger && <Overlay isShow={isOpenBurger} onClick={closeOverlay} />}
      {user && (
        <Header
          isOpenUserMenu={isOpenUserMenu}
          setIsOpenUserMenu={setIsOpenUserMenu}
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
