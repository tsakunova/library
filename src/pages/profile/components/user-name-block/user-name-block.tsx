import { FC } from 'react';
import { uploadPhotoSVG } from 'assets/icons';
import { userAvatar } from 'assets/images';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { uploadPhoto } from 'store/user/user-action';
import { getImageURL } from 'utils/get-image-url';

import { Container, ImageContainer, LabelInput, NameContainer, UploadPhotoContainer } from './user-name-block.style';

type UserProps = {
  firstName?: string;
  lastName?: string;
  avatarImage?: string;
};

export const UserNameBlock: FC<UserProps> = ({ firstName = '', lastName = '', avatarImage }) => {
  const dispatch = useAppDispatch();
  const userId = useTypedSelector(({ user }) => user.user?.id);
  const image = avatarImage ? getImageURL(avatarImage) : userAvatar;

  const onPhotoSelected = (e: any) => {
    if (e.target.files.length && userId) {
      dispatch(uploadPhoto({ file: e.target.files[0], userId }));
    }
  };

  return (
    <Container data-test-id='profile-avatar'>
      <ImageContainer src={image}>
        <UploadPhotoContainer id='input-file' type='file' onChange={onPhotoSelected} />
        <LabelInput image={uploadPhotoSVG} htmlFor='input-file' />
      </ImageContainer>
      <NameContainer>
        <h3>{lastName}</h3>
        <h3>{firstName}</h3>
      </NameContainer>
    </Container>
  );
};
