
import React from 'react';
import '../Style/BestSell.css'; 
import products from '../json/BestSell.json';

const BestSell = () => {
  return (
    <div className="best-sell">
      <h2>Best Sellers</h2>
      <div className="image-gallery">
        {products.map((product, index) => (
          <div key={index} className="image-item">
            <img src={product.src} alt={`Best Seller ${index + 1}`} className="img-fluid" />
            <div className="overlay">Best Seller</div>
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSell;
