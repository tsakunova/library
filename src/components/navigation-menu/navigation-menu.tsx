import { FC, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { NAVIGATION_MENU_LIST } from 'consts';
import { RouteNames } from 'types/enum';
import { NavMenuType } from 'types/types';

import { NavListItem } from './components/nav-list-item';
import { BurgerMenuContainer, Container } from './navigation-menu.style';

type NavMenuProps = {
  isBurgerMenu: boolean;
  isShowMenu?: boolean;
  setIsOpen?: (value: boolean) => void;
};

export const NavigationMenu: FC<NavMenuProps> = ({ isBurgerMenu, isShowMenu = true, setIsOpen }) => {
  const [navMenuList, setNavMenuList] = useState<NavMenuType[]>([]);
  const [activeRoute, setActiveRoute] = useState<RouteNames>(RouteNames.books);
  const [isBooksListOpen, setIsBooksListOpen] = useState<boolean>(true);
  const navRef = useRef(null);

  useEffect(() => {
    setNavMenuList(NAVIGATION_MENU_LIST);
  }, []);

  const onPressRoute = useCallback(
    (route: RouteNames) => {
      setActiveRoute(route);
      if (activeRoute === RouteNames.books) {
        setIsBooksListOpen(!isBooksListOpen);
      }
    },
    [activeRoute, isBooksListOpen]
  );

  const renderMenu = useCallback(
    () =>
      navMenuList.map((item) => (
        <NavListItem
          key={item.route}
          item={item}
          activeRoute={activeRoute}
          onPressRoute={onPressRoute}
          isBooksListOpen={isBooksListOpen}
          setIsBookListOpen={setIsBooksListOpen}
        />
      )),
    [activeRoute, isBooksListOpen, navMenuList, onPressRoute]
  );

  const StyledComponent = useMemo(() => (isBurgerMenu ? BurgerMenuContainer : Container), [isBurgerMenu]);

  return (
    <StyledComponent isShowMenu={isShowMenu} onFocus={() => setIsOpen && setIsOpen(false)}>
      <ul>{renderMenu()}</ul>
    </StyledComponent>
  );
};
