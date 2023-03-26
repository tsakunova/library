import { RouteNames, RouteTestId } from '../enums/enum';

export type MainBookDTO = {
  issueYear?: number | string;
  rating?: number;
  title: string;
  authors?: string[];
  image?: ImagesType | string | null;
  categories?: string[];
  id: number;
  booking?: {
    id: number;
    order: boolean;
    dateOrder?: string;
    customerId?: number;
    customerFirstName?: string;
    customerLastName?: string;
  };
  delivery?: {
    id: number;
    handed: boolean;
    dateHandedFrom?: string;
    dateHandedTo?: string;
    recipientId?: number;
    recipientFirstName?: string;
    recipientLastName?: string;
  };
  histories?: {
    id?: number;
    userId?: number;
  };
};

export type UserDTO = {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: {
    id: number;
    name: string;
    description: string;
    type: string;
  };
  comments: Array<{
    id: number;
    rating?: number;
    text: string;
    bookId: number;
  }>;

  avatar: string;
  booking: {
    id: number;
    order: boolean;
    dateOrder: string;
    book: {
      id: number;
      title: string;
      rating?: number;
      issueYear: string;
      authors: string[];
      image?: string | ImagesType | null;
    };
  };
  delivery: {
    id: number;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedTo: string;
    book: {
      id: number;
      title: string;
      rating?: number;
      issueYear: string;
      authors: string[];
      image?: string | ImagesType | null;
    };
  };
  history: {
    id: number;
    books: [
      {
        id: number;
        title: string;
        rating?: number;
        issueYear: string;
        authors: string[];
        image?: string | ImagesType | null;
      }
    ];
  };
};

export type UserAPI = {
  jwt: string;
  id: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatarLink?: string;
};

export type NavMenuItemList = {
  listTitle: string;
  testId: RouteTestId;
  route: RouteNames;
  items: CategoriesDTO[];
};

export type NavMenuType = {
  route: RouteNames;
  isOnlyBurger: boolean;
  title: string;
  testId: RouteTestId;
  list?: NavMenuItemList;
};

export type CategoriesDTO = {
  name: string;
  id: number;
  path: string;
  count?: number;
};

export type ImagesType = {
  url?: string;
};

export type FullBookDTO = {
  id: number;
  categories: string[];
  title: string;
  images: ImagesType[];
  authors: string[];
  description: string;
  rating: number;
  publish?: string;
  issueYear?: number;
  pages?: number;
  cover?: string;
  format?: string;
  weight?: string;
  ISBN?: string;
  producer?: string;
  comments: CommentDTO[];
  booking?: {
    id: number;
    order: boolean;
    dateOrder?: string;
    customerId?: number;
    customerFirstName?: string;
    customerLastName?: string;
  };
  delivery?: {
    id: number;
    handed: boolean;
    dateHandedFrom?: string;
    dateHandedTo?: string;
    recipientId?: number;
    recipientFirstName?: string;
    recipientLastName?: string;
  };
  histories?: Array<{
    id?: number;
    userId?: number;
  }>;
};

export type CommentDTO = {
  id: number;
  rating: number;
  text?: string;
  createdAt: string;
  user: {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
  };
};

export type StyledEndpoints = {
  tablet?: string;
  mobile?: string;
  laptop?: string;
};
