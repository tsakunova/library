export enum ToastMessages {
  mainError = 'Что-то пошло не так. Обновите страницу через некоторое время.',
  mainSuccess = 'успешно',
  addRatingSuccess = 'Спасибо, что нашли время оценить книгу!',
  addRatingError = 'Оценка не была отправлена. Попробуйте позже!',
  bookingSuccess = 'Книга забронирована. Подробности можно посмотреть на странице Профиль',
  bookingError = 'Что-то пошло не так, книга не забронирована. Попробуйте позже!',
  editBookingSuccess = 'Изменения успешно сохранены!',
  editBookingError = 'Изменения не были сохранены. Попробуйте позже!',
  deleteBookingError = 'Не удалось снять бронирование книги. Попробуйте позже!',
  deleteBookingSuccess = 'Бронирование книги успешно отменено!',
}
export enum ToastVariant {
  positive = 'positive',
  negative = 'negative',
}

export enum ToastType {
  edit = 'edit',
  add = 'add',
  delete = 'delete',
  rate = 'rate',
  main = 'main',
}
export type AppToast = {
  toastVariant: ToastVariant;
  toastMessage: ToastMessages;
  toastType?: ToastType;
};
