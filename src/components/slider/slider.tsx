import React, { FC, useRef, useState } from 'react';
import { book } from 'assets/images';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { type Swiper as SwiperRef, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { keyExtractor } from 'utils/key-extractor';

import { ImageContainer } from './slider.style';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const BookSlider: FC<{ images: string[] }> = ({ images }) => {
  const [activeThumbs, setActiveThumbs] = useState<any>();

  return (
    <ImageContainer>
      <Swiper
        data-test-id='slide-big'
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumbs && !activeThumbs.destroyed ? activeThumbs : null }}
        className='images-slider'
      >
        {images.map((item, index) => (
          <SwiperSlide key={keyExtractor(index)}>
            <img src={item} alt={`Slide${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView='auto'
        freeMode={true}
        navigation={true}
        centerInsufficientSlides={true}
        modules={[Thumbs]}
        watchSlidesProgress={true}
        onSwiper={setActiveThumbs}
        className='images-slider-thumbs'
      >
        {images.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <div className='images-slider-thumbs-wrapper' data-test-id='slide-mini'>
              <img src={item} alt={`Slide${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageContainer>
  );
};
