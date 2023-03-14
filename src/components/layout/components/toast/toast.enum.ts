export enum ToastMessages {
  mainError = 'Что-то пошло не так. Обновите страницу через некоторое время.',
  addRatingSuccess = 'Спасибо, что нашли время оценить книгу!',
  addRatingError = 'Оценка не была отправлена. Попробуйте позже!',
  bookingSuccess = 'Книга забронирована. Подробности можно посмотреть на странице Профиль',
  bookingError = 'Что-то пошло не так, книга не забронирована. Попробуйте позже!',
}
export enum ToastType {
  positive = 'positive',
  negative = 'negative',
}

export type AppToast = {
  toastType: ToastType;
  toastMessage: string;
};
