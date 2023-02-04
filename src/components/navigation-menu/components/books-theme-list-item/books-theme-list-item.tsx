import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { BookCategory, RouteNames } from 'types/enum';

import { BookListItemLi } from './books-theme-list-item.style';

type BooksThemeItemProps = {
  item: {
    name: string;
    count: number;
    category: BookCategory;
  };
};

export const BooksThemeListItem: FC<BooksThemeItemProps> = ({ item }) => (
  <BookListItemLi>
    <NavLink to={`/${RouteNames.books}/${item.category}`}>
      {item.name} <span>{item.count}</span>
    </NavLink>
  </BookListItemLi>
);
