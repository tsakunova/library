export type AddCommentType = {
  commentId?: number;
  data: {
    rating: number;
    text: string;
    book: string;
    user: string;
  };
};

export type BookingType = {
  order: boolean;
  dateOrder: string;
  book?: string;
  customer?: string;
  bookingId?: number;
};

export type ResetPasswordData = {
  password: string;
  passwordConfirmation: string;
  code: string;
};

export type RegistrationUserData = {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type UpdateUserData = {
  id?: number;
  data: {
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
  };
};
