export enum OverdueType {
  booking = 'booking',
  delivery = 'delivery',
}

export enum ErrorOverdueTitle {
  reserved = 'Дата бронирования книги истекла',
  taken = 'Вышел срок пользования книги',
}
export enum ErrorOverdueMessage {
  reserved = 'Через 24 часа книга будет  доступна всем',
  taken = 'Верните книгу, пожалуйста',
}

export enum ValidationErrors {
  emptyField = 'Поле не может быть пустым',
  passRepeat = 'Пароли не совпадают',
  latin = 'латинский алфавит',
  number = 'цифры',
  length = 'не менее 8 символов',
  upperCase = 'с заглавной буквой',
  passNumber = 'цифрой',
  email = 'Введите корректный e-mail',
}
