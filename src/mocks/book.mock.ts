import { coverPreview } from 'assets/images';
import { BookCategory } from 'types/enum';
import { CommentDTO, FullBookDTO } from 'types/types';

export const MOCK_BOOK: FullBookDTO = {
  id: 5,
  category: BookCategory.history,
  title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
  imageLink: coverPreview,
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
};

export const MOCK_COMMENTS: CommentDTO[] = [
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    publishAt: '2019-01-05T19:15:43.079Z',
    rating: 4.4,
  },
  {
    firstName: 'Николай',
    lastName: 'Качков',
    publishAt: '2018-06-20T19:15:43.079Z',
    rating: 4.3,
    comment:
      'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
  },
  {
    firstName: 'Екатерина',
    lastName: 'Беляева',
    publishAt: '2018-02-28T19:15:43.079Z',
    rating: 4.3,
  },
];
