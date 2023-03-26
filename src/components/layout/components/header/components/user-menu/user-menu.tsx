import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames, TitleVariant } from 'enums';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { logout } from 'store/auth/login/login-slice';

import { MenuItem, UserMenuContainer } from './user-menu.style';

export const UserMenu: FC<{ isOpen: boolean; setIsOpen: (value: boolean) => void }> = ({ isOpen, setIsOpen }) => {
  const dispatch = useAppDispatch();
  const burgerOpenHandler = () => {
    dispatch(logout());
    setIsOpen(!isOpen);
  };

  return (
    <UserMenuContainer isShowMenu={isOpen}>
      <MenuItem>
        <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${RouteNames.profile}`} data-test-id='profile-button'>
          {TitleVariant.profile}
        </NavLink>
      </MenuItem>
      <MenuItem onClick={burgerOpenHandler}>{TitleVariant.exit}</MenuItem>
    </UserMenuContainer>
  );
};
