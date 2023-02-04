import { FC, useCallback } from 'react';
import { NavMenuItemList } from 'types/types';

import { BooksThemeListItem } from '../books-theme-list-item';

import { BooksList } from './books-theme-list.style';

export const BooksThemeList: FC<{ list: NavMenuItemList }> = ({ list }) => {
  const renderItem = useCallback(
    () => list?.items.map((item) => <BooksThemeListItem item={item} key={item.category} />),
    [list?.items]
  );

  return (
    <BooksList>
      <li>
        {list?.listTitle}
        <ul>{renderItem()}</ul>
      </li>
    </BooksList>
  );
};
