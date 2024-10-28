import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState(''); // New state for address
    const [phone, setPhone] = useState(''); // New state for phone number
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/Users.json');
            const users = await response.json();

            const userExists = users.find(user => user.email === email);

            if (userExists) {
                setError('Email already exists');
            } else {
                alert('Registration successful');
                // Optionally, you can send this data to a backend or save it in local storage.
            }
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="card-body">
                    <h2 className="text-center mb-4">Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name*</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password*</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address*</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="Enter your address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number*</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-danger">{error}</p>}
                        <div className="d-flex justify-content-center">
                            <Link to="/"
                                className="btn btn-primary shadow-sm"
                                style={{ backgroundColor: "#0000ff", borderRadius: "30px", padding: "10px 20px", border: "none" }}
                            >
                                Continue
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
