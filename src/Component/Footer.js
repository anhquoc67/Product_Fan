import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';


function Footer() {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const date = new Date().toLocaleDateString();
        setCurrentDate(date);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row text-left">
                    {/* Column 1: Logo and Company Info */}
                    <div className="col-lg-4 col-md-4 mb-4">
                        <Link to="/" className="navbar-brand">
                            <img
                                src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729172836/logofan_cyuvb7.png"
                                alt="Logo"
                                className="img-fluid"
                                style={{ maxWidth: '120px', borderRadius: '10px' }}
                            />
                        </Link>
                        <p className="text-white mt-3">Fanimation Company</p>
                        <p className="text-white mt-3">Address: 123 Main St, Mumbai City, India</p>
                        <p className="text-white mt-3">Email: Fanimation@fanimation.com</p>
                        <p className="text-white mt-3">Fax: (+91) 909123456</p>
                        <div className="social-icons mt-2">
                            <Link to="https://facebook.com" target="_blank" className="text-white mx-2">
                                <Facebook />
                            </Link>
                            <Link to="https://instagram.com" target="_blank" className="text-white mx-2">
                                <Instagram />
                            </Link>
                            <Link to="https://twitter.com" target="_blank" className="text-white mx-2">
                                <Twitter />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: About Us */}
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold mb-3">About Us</h5>
                        <p className="text-white mt-3">
                            At Fanimation, we provide high-quality fans that meet the needs of any space, from homes and offices to restaurants, hotels, and industries. Our mission is to deliver comfort and improve air quality with a wide range of fans, from compact models to industrial-grade options. Explore our collection and find the perfect fan for you!
                        </p>
                    </div>

                    {/* Column 3: Our Location */}
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold mb-3">Our Location</h5>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.983400623233!2d72.8776557747927!3d19.07609048705085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9e7fbbd3cf%3A0x4d4c5d1169f86570!2s123%20Main%20St%2C%20Mumbai%2C%20Maharashtra%20400001%2C%20India!5e0!3m2!1sen!2sus!4v1632104062439!5m2!1sen!2sus"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                
                
                    <div className="row text-left mt-4">
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold mb-3">FPT Aptech HCMC-VN</h5>
                        <p className="text-white mt-3">Address: 590 Cach Mang Thang Tam Str, Ward 11, District 3</p>
                        <p className="text-white mt-3">Address: 391A Nam Ky Khoi Nghia Str, Vo Thi Sau Ward, District 3</p>
                        <Link to="https://aptech.fpt.edu.vn" target="_blank" className="text-white mx-2">
                            https:FPT Aptech
                        </Link>
                        <p className="text-white mt-3">Copyright 2024 - Anh Quoc Nguyen - Student1577132</p>
                    </div>
                    </div>
                    {/* Column 2: Refined Site Map */}
                    
                    {/* <div className="col-lg-4 col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold mb-3">
                        <Link to="/SiteMapModal" className="">
                            SITE MAP
                        </Link>
                        </h5>
                    </div> */}

                    {/* Column 3: Current Date and Time */}
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold mb-3">Today</h5>
                        <p className="text-white mt-3">
                            {currentDate} - {currentTime}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
