import React from 'react';
import '../Style/Contact.css';
import { Link } from 'react-router-dom';

function Body() {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <form action="link of address" onSubmit={handleSubmit} className="bg-light p-4 shadow rounded">
                        <h2 className="text-center mb-4">Contact Us</h2>
                        <hr />

                        {/* Địa chỉ hiện tại */}
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Your Address<span className="text-danger">*</span></label>
                            <input type="text" name="address" id="address" className="form-control" required />
                        </div>

                        {/* Địa chỉ email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your Email <span className="text-danger">*</span></label>
                            <input type="email" name="email" id="email" className="form-control" required />
                        </div>

                        {/* Số điện thoại */}
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone<span className="text-danger">*</span></label>
                            <input type="text" name="phone" id="phone" className="form-control" required />
                        </div>

                        <div className="d-flex justify-content-center">
                            <Link to="/"
                                className="btn btn-primary shadow-sm"
                                style={{ backgroundColor: "#0000ff", borderRadius: "30px", padding: "10px 20px", border: "none" }}
                            >
                                Submit
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Body;
