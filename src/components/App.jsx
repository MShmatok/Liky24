import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';

const Shop = lazy(() => import('../pages/shop/Shop'));
const Cart = lazy(() => import('../pages/cart/Cart'));
const History = lazy(() => import('../pages/history/History'));

const NotFoundPage = lazy(() => import('../pages/notFoundPage/NotFoundPage'));

const createRouter = () => {
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Shop />,
            errorElement: <NotFoundPage />,
          },
          {
            path: '/cart',
            element: <Cart />,
            errorElement: <NotFoundPage />,
          },
          {
            path: '/history',
            element: <History />,
            errorElement: <NotFoundPage />,
          },

          {
            path: '*',
            element: <Shop />,
            errorElement: <NotFoundPage />,
          },
        ],
      },
    ],
    { basename: '/' }
  );
  return router;
};

export const App = () => {
  return <RouterProvider router={createRouter()} />;
};
