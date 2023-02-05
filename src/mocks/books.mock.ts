import { book, book2, book3, book4 } from 'assets/images';
import { BookCategory } from 'types/enum';
import { FullBookDTO } from 'types/types';

export const mockBooks: FullBookDTO[] = [
  {
    id: 0,
    category: BookCategory.art,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: undefined,
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 1,
    category: BookCategory.business,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book2],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 2,
    category: BookCategory.computer,
    title: 'Грокаем алгоритмы.',

    imageLink: [book3, book4, book3, book2, book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 3,
    category: BookCategory.art,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book4, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 4,
    category: BookCategory.business,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 5,
    category: BookCategory.computer,
    title: 'Грокаем алгоритмы.',

    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: true,
    bookedTill: '2023-05-03T19:15:43.079Z',
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 6,
    category: BookCategory.art,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: undefined,
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 7,
    category: BookCategory.handbook,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book2, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.7,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 8,
    category: BookCategory.computer,
    title: 'Грокаем алгоритмы.',

    imageLink: [book3, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.2,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 9,
    category: BookCategory.art,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.1,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 10,
    category: BookCategory.history,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 11,
    category: BookCategory.computer,
    title: 'Грокаем алгоритмы.',

    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.8,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 12,
    category: BookCategory.humor,
    title: 'Грокаем алгоритмы.',

    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 13,
    category: BookCategory.art,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: true,
    bookedTill: '2023-05-03T19:15:43.079Z',
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 14,
    category: BookCategory.business,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 15,
    category: BookCategory.business,
    title: 'Грокаем алгоритмы.',

    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 16,
    category: BookCategory.art,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 3.2,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 17,
    category: BookCategory.classic,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 18,
    category: BookCategory.computer,
    title: 'Грокаем алгоритмы.',

    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: true,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 19,
    category: BookCategory.art,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 20,
    category: BookCategory.classic,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
  {
    id: 21,
    category: BookCategory.computer,
    title: 'Грокаем алгоритмы.',

    imageLink: [book, book2, book4, book3],
    author: 'Адитья Бхаргава',
    about:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\n Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    rating: 4.3,
    isBooked: false,
    publishingOffice: 'Питер',
    publishingYear: 2019,
    pages: 288,
    restrictions: '18+',
    cover: 'Мягкая обложка',
    format: '70х100',
    genre: 'Компьютерная литература',
    weight: 370,
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  },
];
