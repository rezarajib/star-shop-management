import React, { useState, useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Root() {
  // Router loader 
  const { initialProducts, initialIncome } = useLoaderData();

  const [products, setProducts] = useState(initialProducts);
  const [dailyIncome, setDailyIncome] = useState(initialIncome);

  //  LocalStorage 
  useEffect(() => {
    localStorage.setItem('shop_products', JSON.stringify(products));
  }, [products]);

  //  LocalStorage 
  useEffect(() => {
    localStorage.setItem('shop_income', dailyIncome.toString());
  }, [dailyIncome]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto', padding: '20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <Header />
        <main style={{ marginTop: '20px' }}>
          <Outlet context={{ products, setProducts, dailyIncome, setDailyIncome }} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Root;