import React from 'react';
import feedbacks from  '../../json/FeedbackData.json'


function FeedBack() {
    const url = process.env.PUBLIC_URL;
    console.log (url);
    return (
        <div className="container text-center my-5">
            <h2 className="mb-4">Customer Feedback</h2>
            <p className="text-black mt-3">We greatly value the feedback from our customers, as it is a testament to our commitment to quality and excellence. We invite and encourage our valued customers to share their insights and experiences with our products. Your opinions not only help us improve but also guide potential customers in making informed decisions. Thank you for being a part of our journey!</p>
            <hr className="w-25 mx-auto" />
            <div className="row" id='feedback'>
                {
                    feedbacks.map((feedback) => (
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-lg border-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <img 
                                            src={feedback.avatarUrl} 
                                            alt={feedback.name} 
                                            className="rounded-circle me-3" 
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                                        />
                                        <div>
                                            <h5 className="card-title mb-0">{feedback.name}</h5>
                                            <p className="text-muted mb-0">Rating: {feedback.rating} ⭐</p>
                                        </div>
                                    </div>
                                    <p className="card-text text-start">"{feedback.complaint}"</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FeedBack;
