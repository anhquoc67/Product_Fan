import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/Users.json'); // Reading data from users.json file
            const users = await response.json();

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                localStorage.setItem('token', 'fake-jwt-token'); // Store token in localStorage (mock)
                alert('Login successful');
                // Redirect to dashboard or other actions after successful login
            } else {
                setError('Incorrect email or password');
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="card-body">
                    <h2 className="text-center mb-4">Login*</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
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
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-danger">{error}</p>}
                        <div className="d-flex justify-content-center">
                            <Link
                                to="/"
                                className="btn btn-primary shadow-sm"
                                style={{ backgroundColor: "#0000ff", borderRadius: "30px", padding: "10px 20px", border: "none" }}
                            >
                                Login
                            </Link>
                        </div>
                    </form>

                    <div className="text-center">
                        <p className="text-center">Or</p>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{
                                backgroundColor: '#3b5998',
                                color: '#fff',
                                borderRadius: '30px',
                                padding: '10px 20px',
                                textDecoration: 'none'
                            }}
                        >
                            <i className="F"></i> Login with Facebook
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
