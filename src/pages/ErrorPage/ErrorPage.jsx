import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '80px', color: '#e74c3c', margin: 0 }}>404</h1>
      <h2>পেজটি পাওয়া যায়নি!</h2>
      <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>আপনি যে পেজে যেতে চাচ্ছেন তা ভুল বা সরিয়ে নেওয়া হয়েছে।</p>
      <Link to="/" style={{ padding: '10px 20px', backgroundColor: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '4px', display: 'inline-block' }}>
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}

export default ErrorPage;