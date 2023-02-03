import { FC, useCallback, useEffect, useState } from 'react';
import { NAVIGATION_MENU_LIST } from 'consts';
import { RouteNames } from 'types/enum';
import { NavMenuType } from 'types/types';

import { NavListItem } from './components/nav-list-item';
import { Container } from './navigation-menu.style';

export const NavigationMenu: FC = () => {
  const [navMenuList, setNavMenuList] = useState<NavMenuType[]>([]);
  const [activeRoute, setActiveRoute] = useState<RouteNames>(RouteNames.books);
  const [isBooksListOpen, setIsBooksListOpen] = useState<boolean>(true);

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

  return (
    <Container>
      <ul>{renderMenu()}</ul>
    </Container>
  );
};
