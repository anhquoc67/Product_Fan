import React from 'react';
import '../../Style/Fan.css'; // Nhớ import file CSS
import productDetails from '../../json/Accessories.json';

function Accessories() {
    return (
        <div>
            <h2>Accessories</h2>
            <div className="product-grid">
                {productDetails.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.image} alt={product.name} className="ceiling-fan-img" />
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <p>Color: {product.color}</p>
                        <p>Brand: {product.brand}</p>
                        <p>Description: {product.description}</p>
                        <p>Rating: {product.rating}⭐</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accessories;
