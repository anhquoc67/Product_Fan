import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState('');

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const avatar = localStorage.getItem('avatar');

        if (token) {
            setIsLoggedIn(true);
            setAvatarUrl(avatar || 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png');
        }
    }, []);
    const products = [
        { name: 'Ceiling Fan', id: 1, path: '/CeilingFan' },
        { name: 'Pedestal Fan', id: 2, path: '/PedestalFan' },
        { name: 'Wall Fan', id: 3, path: '/WallFan' },
        { name: 'Exhaust Fan', id: 4, path: '/ExhaustFan' },
        { name: 'Accessories', id: 5, path: '/Accessories' }
    ];
    const searchProducts = (e) => {
        e.preventDefault();  // Prevent page reload on form submission

        if (searchQuery.trim() === '') {
            setErrorMessage(''); // Set error message
            setSearchResults([]); // Clear previous results
            return; // Stop execution
        }

        // Clear any previous error messages
        setErrorMessage('');

        // Filter products based on search query
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Set search results
        setSearchResults(filteredProducts);

        // If only one result, navigate to that product's page
        if (filteredProducts.length === 1) {
            navigate(filteredProducts[0].path);
        } else if (filteredProducts.length > 1) {
            // Optionally navigate to a search results page
            // navigate('/search-results');
        } else {
            setErrorMessage(''); // Set error message if no results found
        }
    };


    return (
        <header className="bg-light shadow-sm">
            <div className="container">
                <div className="row align-items-center">
                    {/* Logo */}
                    <div className="col-lg-2 col-md-3 col-6">
                        <Link to="/" className="navbar-brand">
                            <img
                                src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729172836/logofan_cyuvb7.png"
                                alt="Logo"
                                className="img-fluid"
                                style={{ maxWidth: '200px', borderRadius: '10px' }}
                            />
                        </Link>
                    </div>

                    <div className="col-lg-9 col-md-4 text-end d-none d-lg-block">
                        <nav>
                            <ul className="nav justify-content-end">
                                <li className="search-box">
                                    <form onSubmit={searchProducts} className="d-flex">
                                        <input
                                            type="text"
                                            className="form-control me-2"
                                            placeholder="Search products"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            style={{ width: '200px' }}
                                        />
                                        <button type="submit">
                                            <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Search Icon" />
                                        </button>
                                    </form>
                                </li>

                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}


                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-dark fw-bold custom-nav-link">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/Gallery" className="nav-link text-dark fw-bold">
                                        Gallery
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <button
                                        className="nav-link dropdown-toggle text-dark fw-bold "
                                        href="#"
                                        id="dropdownMenuLink"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"

                                    >
                                        Product
                                    </button>

                                    <ul
                                        className="dropdown-menu "
                                        aria-labelledby="dropdownMenuLink"
                                        style={{
                                            backgroundColor: '#fff',
                                            color: '#4b3b17',
                                            borderRadius: '10px',
                                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                            zIndex: 1000,
                                        }}
                                    >
                                        <li>
                                            <Link className="dropdown-item black" to='/CeilingFan'>
                                                Ceiling Fan
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item black" to="/PedestalFan">
                                                Pedestal Fan
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item black" to="/WallFan">
                                                Wall Fan
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item black" to="/ExhaustFan">
                                                Exhaust Fan
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item black" to="/Accessories">
                                                Accessories
                                            </Link>
                                        </li>
                                    </ul>

                                </li>
                                <li className="nav-item">
                                    <Link to="/AboutUs" className="nav-link text-dark fw-bold">
                                        About Us
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/ContactUs" className="nav-link text-dark fw-bold">
                                        Contact Us
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/FAQ" className="nav-link text-dark fw-bold">
                                        FAQ
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {isLoggedIn ? (
                                        <img
                                            src={avatarUrl}
                                            alt="Avatar"
                                            className="rounded-circle"
                                            style={{ width: '40px', height: '40px' }}
                                        />
                                    ) : (
                                        <Link
                                            to="/Login"
                                            className="nav-link text-dark fw-bold"
                                        >
                                            Login
                                        </Link>
                                    )}
                                </li>
                                <li className="nav-item">
                                    <Link to="/Register" className="nav-link text-dark fw-bold">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-6 d-lg-none text-end">
                        <button
                            className="btn btn-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path d="M1.5 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5l-6.5 6.5-6.5-6.5z" />
                            </svg>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse d-lg-none" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="search-box">
                                    <form onSubmit={searchProducts} className="d-flex">
                                        <input
                                            type="text"
                                            className="form-control me-2"
                                            placeholder="Search products"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            style={{ width: '200px' }}
                                        />
                                        <button type="submit">
                                            <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Search Icon" />
                                        </button>
                                    </form>
                                </li>

                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link dropdown-toggle text-dark fw-bold "
                                    href="#"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"

                                >
                                    Product
                                </button>

                                <ul
                                    className="dropdown-menu "
                                    aria-labelledby="dropdownMenuLink"
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#4b3b17',
                                        borderRadius: '10px',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                        zIndex: 1000,
                                    }}
                                >
                                    <li>
                                        <Link className="dropdown-item black" to='/CeilingFan'>
                                            Ceiling Fan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item black" to="/PedestalFan">
                                            Pedestal Fan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item black" to="/WallFan">
                                            Wall Fan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item black" to="/ExhaustFan">
                                            Exhaust Fan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item black" to="/Accessories">
                                            Accessories
                                        </Link>
                                    </li>
                                </ul>

                            </li>
                            <li className="nav-item">
                                <Link to="/Gallery" className="nav-link text-dark fw-bold">
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AboutUs" className="nav-link text-dark fw-bold">
                                    About Us
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/ContactUs" className="nav-link text-dark fw-bold">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Login" className="nav-link text-dark fw-bold">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Register" className="nav-link text-dark fw-bold">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
</header>
    );
}


export default Header;