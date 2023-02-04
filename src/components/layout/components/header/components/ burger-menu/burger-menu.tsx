import { FC } from 'react';

import { BurgerLine, BurgerMenuContainer } from './burger-menu.style';

type BurgerMenuProps = {
  isOpen: boolean;
};

export const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen }) => (
  <BurgerMenuContainer>
    <BurgerLine isOpen={isOpen} />
  </BurgerMenuContainer>
);
