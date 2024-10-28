import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSitemap } from 'react-icons/fa'; // Icon for Site Map
import 'bootstrap/dist/css/bootstrap.min.css';

function SiteMapModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* Button to open modal */}
            <Button 
                variant="outline-light" 
                onClick={handleShow} 
                className="d-flex align-items-center"
            >
                <FaSitemap style={{ marginRight: '8px', }} /> SITE MAP
            </Button>

            {/* Modal component */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h5>SITE MAP</h5>
                </Modal.Header>
                <Modal.Body>
                    <nav>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link" onClick={handleClose}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/Gallery" className="nav-link" onClick={handleClose}>
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item dropdown mb-2">
                                <button
                                    className="nav-link dropdown-toggle"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        padding: '0',
                                    }}
                                >
                                    Product
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/CeilingFan" onClick={handleClose}>
                                            Ceiling Fan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/PedestalFan" onClick={handleClose}>
                                            Pedestal Fan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/WallFan" onClick={handleClose}>
                                            Wall Fan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/ExhaustFan" onClick={handleClose}>
                                            Exhaust Fan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/Accessories" onClick={handleClose}>
                                            Accessories
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/AboutUs" className="nav-link" onClick={handleClose}>
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/ContactUs" className="nav-link" onClick={handleClose}>
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/FAQ" className="nav-link" onClick={handleClose}>
                                    FAQ
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/Login" className="nav-link" onClick={handleClose}>
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/Register" className="nav-link" onClick={handleClose}>
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SiteMapModal;
