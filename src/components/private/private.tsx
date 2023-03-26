import { Navigate, Outlet } from 'react-router-dom';
import { RouteNames } from 'enums';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const PrivateRouter = () => {
  const user = useTypedSelector(({ login }) => login.user);

  return user ? <Outlet /> : <Navigate to={RouteNames.auth} />;
};
