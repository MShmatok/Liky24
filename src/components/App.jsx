import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/root/selectors';
import Loader from './loader/Loader';

const Shop = lazy(() => import('../pages/shop/Shop'));
const Cart = lazy(() => import('../pages/cart/Cart'));
// const History = lazy(() => import('../pages/history/History'));

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
          // {
          //   path: '/history',
          //   element: <History />,
          //   errorElement: <NotFoundPage />,
          // },

          {
            path: '*',
            element: <Shop />,
            errorElement: <NotFoundPage />,
          },
        ],
      },
    ],
    { basename: '/Liky24-front' }
  );
  return router;
};

export const App = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <RouterProvider router={createRouter()} />;{isLoading && <Loader />}
    </>
  );
};
