import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames } from 'types/enum';
import { NavMenuType } from 'types/types';

import { BooksThemeList } from '../books-theme-list';

import { CurrentActiveLink, NavListItemLi } from './nav-list-item.style';

type NavListItemProps = {
  item: NavMenuType;
  onPressRoute: (route: RouteNames) => any;
  setIsBookListOpen: (value: boolean) => any;
  isBooksListOpen: boolean;
  activeRoute: RouteNames;
};

export const NavListItem: FC<NavListItemProps> = ({
  item,
  onPressRoute,
  isBooksListOpen,
  setIsBookListOpen,
  activeRoute,
}) => (
  <NavListItemLi>
    <CurrentActiveLink onClick={() => onPressRoute(item.route)}>
      <NavLink to={`/${item.route}`} className={({ isActive }) => (isActive ? 'active mainLink' : 'mainLink')}>
        {item.title}
      </NavLink>
    </CurrentActiveLink>
    {item.list && activeRoute === RouteNames.books && isBooksListOpen && <BooksThemeList list={item.list} />}
  </NavListItemLi>
);
