import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Inventory() {
  const { products, setProducts } = useOutletContext();

  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newStock, setNewStock] = useState('');

  // নতুন প্রোডাক্ট অ্যাড করার ফাংশন
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newName || !newPrice || !newStock) {
      alert('অনুগ্রহ করে সবগুলো ঘর পূরণ করুন!');
      return;
    }

    const newItem = {
      id: Date.now(),
      name: newName,
      price: parseFloat(newPrice),
      stock: parseInt(newStock)
    };

    setProducts([...products, newItem]);
    setNewName('');
    setNewPrice('');
    setNewStock('');
  };

  // পুরনো প্রোডাক্ট ডিলিট করার ফাংশন
  const handleDeleteProduct = (id) => {
    if (window.confirm('আপনি কি নিশ্চিত যে পণ্যটি মুছে ফেলতে চান?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      
      {/* নতুন পণ্য যোগ করার ফর্ম */}
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 15px 0' }}>➕ নতুন পণ্য নামান (New Item)</h3>
        <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            placeholder="পণ্যের নাম"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="number"
            placeholder="দাম (টাকা)"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="number"
            placeholder="প্রাথমিক স্টক পরিমাণ"
            value={newStock}
            onChange={(e) => setNewStock(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '10px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            যোগ করুন
          </button>
        </form>
      </div>

      {/* স্টক তালিকা ও ডিলিট অপশন */}
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 15px 0' }}>📦 ইনভেন্টরি পণ্য তালিকা ({products.length})</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxHeight: '260px', overflowY: 'auto' }}>
          {products.map((prod) => (
            <li key={prod.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <span>{prod.name} - ৳{prod.price} (স্টক: {prod.stock})</span>
              <button
                onClick={() => handleDeleteProduct(prod.id)}
                style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
              >
                ডিলিট
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Inventory;