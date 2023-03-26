import React, { FC } from 'react';
import { userAvatar } from 'assets/images';
import { AvatarImg } from 'components/avatar-img';
import { UserDTO } from 'types/types';
import { getImageURL } from 'utils/get-image-url';

import { UserMenu } from '../user-menu';

import { AuthorizationContainer, Subtitle } from './header-authorisation.style';

type HeaderAuthorizationProps = {
  user: UserDTO | null;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const HeaderAuthorization: FC<HeaderAuthorizationProps> = ({ user, isOpen, setIsOpen }) => {
  const firstName = user?.firstName || '';
  const image = user?.avatar ? getImageURL(user?.avatar) : userAvatar;

  return (
    <React.Fragment>
      <AuthorizationContainer onClick={() => setIsOpen(!isOpen)}>
        <Subtitle>Привет, {firstName}!</Subtitle>

        <AvatarImg size={58} bgImage={image} />
      </AuthorizationContainer>
      <UserMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </React.Fragment>
  );
};
