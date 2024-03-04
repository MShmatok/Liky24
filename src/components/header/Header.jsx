import React from 'react';
import { HeaderST, RouterLink } from './Header.styled';

const Header = () => {
  return (
    <>
      <div className="container">
        <HeaderST>
          <nav>
            <RouterLink to={'/'}>Shop</RouterLink>
            <RouterLink to={'/cart'}>Shopping cart</RouterLink>
            <RouterLink to={'/history'}>History</RouterLink>
          </nav>
        </HeaderST>
      </div>
    </>
  );
};

export default Header;
