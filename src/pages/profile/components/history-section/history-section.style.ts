import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0;
  @media ${devices.tablet} {
  }
  @media ${devices.mobile} {
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;

  & .swiper {
    width: 100%;
    padding: 0px 5px 40px 5px;
    @media ${devices.tablet} {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .item {
      width: 255px;
      height: 470px;
      margin-right: 30px;
      box-shadow: ${(props) => props.theme.color.shadow.card};
      border-radius: 3px;
      overflow: hidden;
      & [data-test-id='card'] {
        width: 100%;
        & .bookImage {
          width: 174px;
        }
      }
      @media ${devices.mobile} {
        border-radius: 10px;
      }
    }
    .swiper-pagination {
      position: relative;
      margin-top: ${(props) => `${props.theme.size.default * 2}px`};
      &-bullet-active {
        background-color: ${(props) => props.theme.color.main.dark};
      }
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
