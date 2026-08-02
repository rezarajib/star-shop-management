import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Product from './Product';

function Products() {
  const { products, setProducts, setDailyIncome } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckout = (productId, qty) => {
    const product = products.find((p) => p.id === productId);
    const requestedQty = parseInt(qty);

    if (requestedQty <= 0 || isNaN(requestedQty)) {
      setMessage('দয়া করে সঠিক পরিমাণ প্রদান করুন।');
      setMessageType('error');
      return;
    }

    // Situation A: স্টকে পর্যাপ্ত না থাকলে
    if (requestedQty > product.stock) {
      setMessage(`দুঃখিত! আপনি যতগুলো (${requestedQty} টি) চাচ্ছেন, স্টকে অতগুলো নেই। স্টকে আছে মাত্র ${product.stock} টি।`);
      setMessageType('error');
    } 
    // Situation B: স্টকে পর্যাপ্ত থাকলে
    else {
      const totalPrice = requestedQty * product.price;

      // ১. টোটাল টাকা আজকের ইনকামে যোগ
      setDailyIncome((prev) => prev + totalPrice);

      // ২. স্টক থেকে বিক্রিত পরিমাণ কমানো
      const updatedProducts = products.map((p) =>
        p.id === productId ? { ...p, stock: p.stock - requestedQty } : p
      );
      setProducts(updatedProducts);

      setMessage(`বিক্রি সফল হয়েছে! মোট বিল: ৳${totalPrice}`);
      setMessageType('success');
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>🔍 কাস্টমার সার্ভিস (প্রোডাক্ট চেক ও বিক্রি)</h2>
      
      <input
        type="text"
        placeholder="পণ্যের নাম লিখে সার্চ করুন..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '97%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      {message && (
        <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '4px', backgroundColor: messageType === 'error' ? '#fadbd8' : '#d4efdf', color: messageType === 'error' ? '#900c3f' : '#145a32' }}>
          {message}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '15px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} handleCheckout={handleCheckout} />
          ))
        ) : (
          <p style={{ color: 'red' }}>দুঃখিত, এই নামের কোনো পণ্য আমাদের স্টকে নেই!</p>
        )}
      </div>
    </div>
  );
}

export default Products;