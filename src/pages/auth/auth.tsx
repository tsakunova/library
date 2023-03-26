import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Loader } from 'components/layout/components/loader';
import { RouteNames, TitleVariant } from 'enums';
import { useTypedSelector } from 'hooks/use-typed-selector';

import { Container, Title } from './auth.style';

export const Auth: FC = () => {
  const user = useTypedSelector(({ login }) => login.user);

  return user ? (
    <Navigate to={`/${RouteNames.books}/${RouteNames.booksAll}`} />
  ) : (
    <Container data-test-id='auth'>
      <Loader />
      <Title>{TitleVariant.cleverland}</Title>
      <Outlet />
    </Container>
  );
};
