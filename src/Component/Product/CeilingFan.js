import React from 'react';
import '../../Style/Fan.css';
import productDetails from '../../json/CeilingFan.json'; // Import the JSON file

function CeilingFan() {
    return (
        <div>
            <h2>Ceiling Fans</h2>
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

export default CeilingFan;
