import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; 
import locations from '../../json/FeedbackProductdata.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function FeaturedProduct() {
    const [show, setShow] = useState(false); 
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const [rating, setRating] = useState(0); 
    const [productRatings, setProductRatings] = useState({}); // Lưu đánh giá cho từng sản phẩm

    const handleClose = () => {
        setShow(false);
        setRating(0); 
    };
    
    const handleShow = (location) => {
        setSelectedProduct(location); 
        setRating(productRatings[location.name] || 0); // Hiển thị đánh giá hiện tại
        setShow(true); 
    };

    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleSubmitRating = () => {
        if (selectedProduct) {
            setProductRatings({
                ...productRatings,
                [selectedProduct.name]: rating, // Cập nhật đánh giá cho sản phẩm
            });
            handleClose();
        }
    };

    return (
        <div className="container text-center my-5">
            <h2 className="mb-4">Featured Product</h2>
            <p className="text-black mt-3">Installing a fan in your favorite indoor space? Or adding one to your outdoor haven? The location determines the fan rating (dry, damp and wet) you need. From there, the fun begins as you choose a style that fits you!</p>
            <hr className="w-25 mx-auto" />
            <div className="row">
                {
                    locations.filter(location => 
                        location.name &&
                        location.price &&
                        location.color &&
                        location.brand &&
                        location.description &&
                        location.imageUrl
                    ).map((location) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={location.name}>
                            <div className="card d-flex flex-column h-100 mb-2 shadow-lg border-0" style={{ borderRadius: '12px' }}>
                                <div className="position-relative">
                                    <img
                                        src={location.imageUrl}
                                        className="card-img-top"
                                        alt={location.name}
                                        style={{ height: 'auto', width: '80%', borderRadius: '12px 12px 0 0' }}
                                    />
                                    <div className="position-absolute top-0 end-0 bg-warning text-black px-2 py-1" style={{ borderRadius: '10px' }}>
                                        <p>New</p>
                                    </div>
                                </div>
                                <div className="card-body text-start d-flex flex-column">
                                    <h5 className="card-title text-truncate" style={{ maxWidth: '150px' }}>{location.name}</h5>
                                    <p className="card-text text-muted mb-1">${location.price}</p>
                                    <p className="card-text text-muted mb-1">{location.brand}</p>
                                    <p className="card-text text-muted">{location.description}</p>

                                    {/* Hiển thị đánh giá của sản phẩm */}
                                    <div className="star-rating my-2">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <span
                                                key={value}
                                                className={`star ${value <= (productRatings[location.name] || 0) ? 'selected' : ''}`}
                                                style={{ fontSize: '20px', cursor: 'default', color: value <= (productRatings[location.name] || 0) ? 'gold' : 'gray' }}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>

                                    <Button 
                                        onClick={() => handleShow(location)} 
                                        className="btn btn-outline-light w-100 mt-3 mt-auto"
                                    >
                                        Detail
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Modal hiển thị thông tin sản phẩm */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={selectedProduct?.imageUrl}
                        alt={selectedProduct?.name}
                        style={{ width: 'auto', height: '200px', borderRadius: '12px', objectFit: 'cover', display: 'block', margin: '0 auto' }}

                    />
                    <p><strong>Price:</strong> ${selectedProduct?.price}</p>
                    <p><strong>Color:</strong> {selectedProduct?.color}</p>
                    <p><strong>Brand:</strong> {selectedProduct?.brand}</p>
                    <p><strong>Description:</strong> {selectedProduct?.description}</p>

                    {/* Phần đánh giá bằng ngôi sao */}
                    <div className="star-rating my-3">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                className={`star ${value <= rating ? 'selected' : ''}`}
                                onClick={() => handleStarClick(value)}
                                style={{ fontSize: '30px', cursor: 'pointer', color: value <= rating ? 'gold' : 'gray' }}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmitRating}>
                        Submit Rating
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default FeaturedProduct;
