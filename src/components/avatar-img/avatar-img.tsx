import { FC } from 'react';
import styled from 'styled-components';

type AvatarImgProps = {
  size: number;
  bgImage: string;
};

const AvatarContainer = styled.div<{ bgImage: string; size: number }>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  background-image: ${(props) => `url(${props.bgImage})`};
  background-position: center center;
  border-radius: 50%;
  background-size: cover;
  filter: ${(props) => props.theme.color.shadow.buttonFilter};
`;

export const AvatarImg: FC<AvatarImgProps> = ({ size, bgImage }) => <AvatarContainer bgImage={bgImage} size={size} />;
