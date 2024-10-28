import React from 'react';
import '../../Style/Pedestal.css'; // Nhớ import file CSS
import productDetails from '../../json/PedestalFan.json';

function PedestalFan() {
    return (
        <div>
            <h2>Pedestal Fans</h2>
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

export default PedestalFan;
