import React, { useState } from 'react';

function Product({ product, handleCheckout }) {
  const [sellQty, setSellQty] = useState(1);

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', backgroundColor: '#fafafa' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{product.name}</h3>
      <p style={{ margin: '5px 0' }}>দাম: <strong>৳{product.price}</strong></p>
      <p style={{ margin: '5px 0' }}>
        স্টক: <strong style={{ color: product.stock > 0 ? 'green' : 'red' }}>{product.stock} টি</strong>
      </p>

      {product.stock > 0 ? (
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
          <input
            type="number"
            min="1"
            value={sellQty}
            onChange={(e) => setSellQty(e.target.value)}
            style={{ width: '60px', padding: '6px' }}
          />
          <button
            onClick={() => handleCheckout(product.id, sellQty)}
            style={{ backgroundColor: '#e67e22', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', flex: 1 }}
          >
            বিক্রি করুন
          </button>
        </div>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold', margin: '10px 0 0 0' }}>বর্তমানে স্টক আউট!</p>
      )}
    </div>
  );
}

export default Product;