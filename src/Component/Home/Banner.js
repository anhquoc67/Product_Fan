import React, { useState, useEffect } from 'react';
import BestSell from '../BestSell'; // Import component BestSell

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showBestSell, setShowBestSell] = useState(false); // State để điều khiển hiển thị của BestSell

  const backgroundImages = [
    'https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152039/ceil-decor_s7jlby.jpg',
    'https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152270/ceiling-fan-decor-5_dqmiem.webp',
    'https://res.cloudinary.com/duj4e3i6z/image/upload/v1729151968/ourfan_yxwvjr.webp'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  const images = [
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152038/logo1_p6mp1b.webp",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152020/logo17_hg2ojk.webp",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152015/logo23_o87wuf.webp",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152003/logo38_ssswow.webp",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729151946/pe10_asgzna.webp",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152031/logo10_yqxcpo.webp"
  ];

  const handleLearnMore = () => {
    setShowBestSell(true); // Khi nhấn, cập nhật state để hiển thị BestSell
  };

  return (
    <div>
      <div 
        style={{ 
          backgroundImage: `url(${backgroundImages[currentImage]})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '650px',
          width: '100%',
          position: 'relative',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'background-image 4s ease-in-out'
        }}
      >
        <h1 style={{ 
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' 
        }}>
          New 2024
        </h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '20px', flexWrap: 'wrap' }}>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '350px', margin: '10px' }}>
          <div className="carousel-inner" style={{ maxHeight: '350px' }}>
            {images.map((image, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index}`}
                  style={{ objectFit: 'cover', height: '250px', width: '350px' }}
                />
              </div>
            ))}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'rgba(255, 0, 0, 0.7)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              Best Seller
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        <div style={{ marginLeft: '20px', maxWidth: '300px', flexGrow: 1 }}>
          <h3>Additional Information</h3>
          <p className="text-black mt-3">
            Fanimation fans are the perfect fusion of beauty and functionality. With designs for every style and technology-driven controls for your convenience, Fanimation fans inspire your home. They integrate into any space and allow you to make a statement that is all your own.
          </p>
          <button onClick={handleLearnMore} style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}>
            See More
          </button>
        </div>
      </div>

      {/* Hiển thị BestSell khi nhấn nút See More */}
      {showBestSell && <BestSell />}
    </div>
  );
};

export default Banner;
