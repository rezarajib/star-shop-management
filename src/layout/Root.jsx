import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Root() {
  const [products, setProducts] = useState([]);
  const [dailyIncome, setDailyIncome] = useState(() => {
    const saved = localStorage.getItem('shop_income');
    return saved ? Number(saved) : 0;
  });
  const [loading, setLoading] = useState(true);

  // ১. JSON বা LocalStorage থেকে ডাটা লোড করা
  useEffect(() => {
    const savedProducts = localStorage.getItem('shop_products');
    
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
      setLoading(false);
    } else {
      fetch('/productsData.json')
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          localStorage.setItem('shop_products', JSON.stringify(data));
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error loading products JSON:', err);
          setLoading(false);
        });
    }
  }, []);

  // ২. প্রোডাক্টস পরিবর্তন হলে LocalStorage আপডেট করা
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('shop_products', JSON.stringify(products));
    }
  }, [products, loading]);

  // ৩. ইনকাম আপডেট হলে LocalStorage আপডেট করা
  useEffect(() => {
    localStorage.setItem('shop_income', dailyIncome.toString());
  }, [dailyIncome]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', fontSize: '20px' }}>
        ⏳ ডাটা লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
      </div>
    );
  }

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

// পুরো ফাইলে শুধু একবারই export default থাকবে
export default Root;