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
    loader: async () => {
      // ১. LocalStorage 
      const savedProducts = localStorage.getItem('shop_products');
      let initialProducts = [];

      if (savedProducts) {
        initialProducts = JSON.parse(savedProducts);
      } else {
        // fetch 
        const res = await fetch('/productsData.json');
        initialProducts = await res.json();
        localStorage.setItem('shop_products', JSON.stringify(initialProducts));
      }

      // ২. Income 
      const savedIncome = localStorage.getItem('shop_income');
      const initialIncome = savedIncome ? Number(savedIncome) : 0;

      return { initialProducts, initialIncome };
    },
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