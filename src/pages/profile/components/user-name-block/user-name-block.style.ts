import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
  @media ${devices.tablet} {
  }
  @media ${devices.mobile} {
    flex-direction: column;
    justify-content: center;
  }
`;
export const ImageContainer = styled.div<{ src: string }>`
  width: 160px;
  height: 160px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 50%;
  filter: ${(props) => props.theme.color.shadow.buttonFilter};
  @media ${devices.mobile} {
    width: 150px;
    height: 150px;
  }
`;

export const NameContainer = styled.div`
  h3 {
    font: ${(props) => props.theme.fonts.h1};
    @media ${devices.mobile} {
      font: ${(props) => props.theme.fonts.mobileH2};
      text-align: center;
    }
  }
`;

export const UploadPhotoContainer = styled.input`
  opacity: 0;
`;
export const LabelInput = styled.label<{ image: string }>`
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  background-color: rgba(54, 54, 54, 0.7);
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: center;
  @media ${devices.mobile} {
    background-size: 24px;
    height: 39px;
  }
  & svg {
    & path {
      fill: transparent;
      stroke: white;
    }
  }
`;
