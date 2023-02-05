import { devices } from 'consts';
import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 445px;
  height: 696px;
  overflow: hidden;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  & .images-slider {
    height: 594px;
    .swiper-slide {
      border-radius: 10px;
      border: ${(props) => `1px solid ${props.theme.color.grey.black40}`};
      //padding-top: 70%;
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }
  & .images-slider-thumbs {
    height: 86px;
    margin-top: 16px;
    .swiper-slide {
      width: 19% !important;
      cursor: pointer;
      &-thumb-active {
        .images-slider-thumbs-wrapper {
          border-color: ${(props) => props.theme.color.main.accent};
        }
      }
    }
    &-wrapper {
      width: 65px;
      height: 86px;
      overflow: hidden;
      position: relative;
      border: ${(props) => `1px solid ${props.theme.color.grey.black20}`};
      border-radius: 3px;
      & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }
`;

export const SlidesThumbsWrapper = styled.div``;

// .swiper {
//   width: 100%;
//   height: 300px;
//   margin-left: auto;
//   margin-right: auto;
// }

// .swiper-slide {
//   background-size: cover;
//   background-position: center;
// }

// .mySwiper2 {
//   height: 80%;
//   width: 100%;
// }

// .mySwiper {
//   height: 20%;
//   box-sizing: border-box;
//   padding: 10px 0;
// }

// .mySwiper .swiper-slide {
//   width: 25%;
//   height: 100%;
//   opacity: 0.4;
// }

// .mySwiper .swiper-slide-thumb-active {
//   opacity: 1;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }
