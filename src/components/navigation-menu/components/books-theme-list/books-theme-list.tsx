import { FC, useCallback, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { DownSVG, UpSVG } from 'assets/icons';
import { RouteNames, TestIdType } from 'types/enum';
import { NavMenuItemList } from 'types/types';

import { BooksThemeListItem } from '../books-theme-list-item';

import { BooksList } from './books-theme-list.style';

export const BooksThemeList: FC<{ list: NavMenuItemList; isBurgerMenu: boolean; isListOpen: boolean }> = ({
  list,
  isBurgerMenu,
  isListOpen,
}) => {
  const renderItem = useCallback(
    () => list?.items.map((item) => <BooksThemeListItem item={item} key={item.category} />),
    [list?.items]
  );

  const testId = useMemo(
    () => (isBurgerMenu ? `${TestIdType.burger}-${list.testId}` : `${TestIdType.navigation}-${list.testId}`),
    [isBurgerMenu, list.testId]
  );

  return (
    <BooksList isListOpen={isListOpen}>
      <li>
        <NavLink to={`/${RouteNames.books}/${RouteNames.all}`}>
          <span data-test-id={testId}>{list?.listTitle}</span>
        </NavLink>
        <ul>{renderItem()}</ul>
      </li>
    </BooksList>
  );
};
