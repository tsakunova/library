import { BookCategory, RouteNames } from './enum';

export type UserDTO = {
  name: string;
  avatarLink?: string;
};
export type NavMenuItemList = {
  listTitle: string;
  items: Array<{
    name: string;
    count: number;
    category: BookCategory;
  }>;
};

export type NavMenuType = {
  route: RouteNames;
  title: string;
  list?: NavMenuItemList;
};

export type FullBookDTO = {
  id?: number;
  category: string;
  title: string;
  imageLink?: string;
  author: string;
  about: string;
  rating?: number;
  isBooked: boolean;
  bookedTill?: string;
  publishingOffice?: string;
  publishingYear?: number;
  pages?: number;
  restrictions?: string;
  cover?: string;
  format?: string;
  genre?: string;
  weight?: number;
  ISBN?: string;
  producer?: string;
};

export type CommentDTO = {
  avatarPath?: string;
  firstName: string;
  lastName: string;
  publishAt: string;
  rating: number;
  comment?: string;
};

export type StyledEndpoints = {
  tablet?: string;
  mobile?: string;
  laptop?: string;
};
