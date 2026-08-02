import React from 'react';
import { useOutletContext } from 'react-router-dom';

function CashCounter() {
  const { dailyIncome, setDailyIncome } = useOutletContext();

  const handleResetCash = () => {
    if (window.confirm('আপনি কি নিশ্চিত যে আজকের ক্যাশ ইনকাম রিসেট করে ০ করতে চান?')) {
      setDailyIncome(0);
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
      <h2>💵 আজকের ক্যাশ রেজিস্টার</h2>
      <div style={{ backgroundColor: '#27ae60', color: 'white', padding: '25px', borderRadius: '8px', margin: '20px 0' }}>
        <h3 style={{ margin: 0 }}>দোকানের ক্যাশে মোট জমা আছে:</h3>
        <h1 style={{ fontSize: '42px', margin: '10px 0' }}>৳{dailyIncome}</h1>
      </div>
      <button
        onClick={handleResetCash}
        style={{ padding: '10px 20px', backgroundColor: '#c0392b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        ক্যাশ হিসাব রিসেট করুন
      </button>
    </div>
  );
}

export default CashCounter;