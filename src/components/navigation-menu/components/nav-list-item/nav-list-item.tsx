import React, { FC, useCallback, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { DownSVG, UpSVG } from 'assets/icons';
import { RouteNames, TestIdType } from 'types/enum';
import { NavMenuType } from 'types/types';

import { BooksThemeList } from '../books-theme-list';

import { BeforeBlockLine, CurrentActiveLink, CurrentLink, NavListItemLi } from './nav-list-item.style';

type NavListItemProps = {
  item: NavMenuType;
  onPressRoute: (route: RouteNames) => any;
  setIsBookListOpen: (value: boolean) => any;
  isBooksListOpen: boolean;
  activeRoute: RouteNames;
  isBurgerMenu?: boolean;
};

export const NavListItem: FC<NavListItemProps> = ({
  item,
  onPressRoute,
  isBooksListOpen,
  setIsBookListOpen,
  activeRoute,
  isBurgerMenu = false,
}) => {
  const testId = useMemo(
    () => (isBurgerMenu ? `${TestIdType.burger}-${item.testId}` : `${TestIdType.navigation}-${item.testId}`),
    [isBurgerMenu, item.testId]
  );

  const Arrow = useMemo(() => (isBooksListOpen ? UpSVG : DownSVG), [isBooksListOpen]);

  if (item.isOnlyBurger && !isBurgerMenu) return null;

  return (
    <React.Fragment>
      {item.route === RouteNames.profile && <BeforeBlockLine />}
      <NavListItemLi onClick={() => onPressRoute(item.route)}>
        <CurrentLink data-test-id={testId}>
          <CurrentActiveLink>
            <NavLink to={`/${item.route}`} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              <span>{item.title}</span>
              {item.list && activeRoute === RouteNames.books && <Arrow />}
            </NavLink>
          </CurrentActiveLink>
        </CurrentLink>
        {item.list && (
          <BooksThemeList
            list={item.list}
            isListOpen={isBooksListOpen && activeRoute === RouteNames.books}
            isBurgerMenu={isBurgerMenu}
          />
        )}
      </NavListItemLi>
    </React.Fragment>
  );
};
