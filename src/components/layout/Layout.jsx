import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutST } from './Layout.styled';
import Header from 'components/header/Header';
import Loader from 'components/loader/Loader';

const Layout = () => {
  return (
    <LayoutST>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </LayoutST>
  );
};

export default Layout;
