import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Inventory from '../pages/Inventory/Inventory';
import CashCounter from '../pages/CashCounter/CashCounter';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/inventory',
        element: <Inventory />
      },
      {
        path: '/cash',
        element: <CashCounter />
      }
    ]
  }
]);

export default router;