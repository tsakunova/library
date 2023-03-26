import { FC } from 'react';
import { PROFILE_SECTION_TITLES } from 'consts';
import { CardType, EmptyTitles, ViewVariant } from 'enums';
import { BookCard } from 'pages/books/components/book-card';
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainBookDTO } from 'types/types';

import { EmptyBlock } from '../empty-block';
import { ProfileSectionTitle } from '../profile-section-title';

import { Container, SliderContainer } from './history-section.style';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

export const HistorySection: FC<{ books: MainBookDTO[] }> = ({ books }) => (
  <Container data-test-id='history'>
    <ProfileSectionTitle text={PROFILE_SECTION_TITLES.history} />

    {books.length ? (
      <SliderContainer>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            420: {
              slidesPerView: 1,
            },
            650: {
              slidesPerView: 3,
            },
            1120: {
              slidesPerView: 4,
            },
          }}
          className='swiper'
        >
          {books.map((item) => (
            <SwiperSlide className='item' data-test-id='history-slide' key={item.id}>
              <BookCard book={item} view={ViewVariant.window} type={CardType.history} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    ) : (
      <EmptyBlock title={EmptyTitles.history} />
    )}
  </Container>
);
