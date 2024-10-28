function AboutUs() {
    return (
        <div className="container">
            <h1 style={{ textAlign: 'center'}}> About Us</h1>
            <div className="row text-center my-5">
                <div className="col-md-4">
                    {/* Đảm bảo rằng đường dẫn tới hình ảnh là chính xác */}
                    <img 
                        src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729151969/aboutfan_sxzz2w.webp" 
                        alt="Fan" 
                        className="img-fluid rounded" 
                        style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }} 
                    />
                </div>
                <div className="text-left col-md-8">
                    <h2>About Fan</h2>
                    <p>
                        A fan is an electronic device designed to move air, providing ventilation or cooling. It plays an important role in various environments, from homes and offices to industrial settings. The fan uses a motor to rotate blades attached to a central shaft. As the blades spin, they create a pressure difference in the air, causing the air to move from high-pressure areas (behind the blades) to low-pressure areas (in front of the blades), generating airflow. Fans are highly versatile, easy to find, and an essential part of everyday life, especially in hot or stuffy environments.
                    </p>
                </div>
            </div>

            {/* Đảm bảo cấu trúc HTML hợp lệ */}
            <hr />

            <div className="row my-5">
                <div className="col-md-6">
                    <h2>Our Fan</h2>
                    <p>
                        Our vision is to create a world where comfort and well-being are accessible to everyone, through innovative and efficient air circulation solutions. We strive to enhance the quality of life by providing advanced fan technology that ensures optimal airflow, energy efficiency, and sustainability. We envision a future where our products not only meet the diverse needs of our customers but also contribute positively to the environment. By prioritizing innovation and user experience, we aim to become a leading provider of ventilation solutions, making every space feel refreshing and comfortable.
                    </p>
                </div>
                <div className="col-md-6">
                    {/* Add the image here */}
                    <img 
                        src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729151968/ourfan_yxwvjr.webp" // Replace with the correct path
                        alt="Our Fan Design" 
                        className="img-fluid rounded" 
                        style={{ maxHeight: '300px', objectFit: 'cover', width: 'auto' }} 
                    />
                </div>
            </div>

            <hr />

            <div className="row text-center my-5">
                <div className="col-md-4">
                    <h2>Our History</h2>
                    <p>
                        With a vision to provide effective and sustainable air circulation solutions to enhance quality of life, we started as a small team of passionate innovators focused on the basic functionality of products. Over time, we have improved and adopted advanced technologies such as energy-efficient motors and environmentally friendly materials to meet the growing demands of our customers. Collaborating with industry experts has enabled us to develop a product line of fans that are not only high-performing but also aesthetically refined. In the future, we are committed to continuing innovation and sustainability, with the goal of creating comfortable and healthy living environments for everyone. Our history is a journey of passion and the pursuit of excellence in the fan industry.
                    </p>
                </div>
                <div className="col-md-6">
                    {/* Add the image here */}
                    <img 
                        src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729151967/history_htn17e.webp" // Replace with the correct path
                        alt="Our Fan Design" 
                        className="img-fluid rounded" 
                        style={{ maxHeight: '300px', objectFit: 'cover', width: 'auto' }} 
                    />
                </div>
            </div>
            <hr />

            <div className="row text-left my-5">
                <div className="col-md-12">
                    <h2 className="text-center">Meet Our Team</h2>
                    <p>
                        Our team is the heart of the organization, bringing together diverse talents and expertise to drive innovation and excellence in air circulation solutions. These elite members consistently provide various solutions that meet customer needs.
                        <ol>
                            <li>Nguyen Anh Quoc</li>
                            <li>Pham Thanh Chien</li>
                            <li>Nguyen Tan Phuc</li>
                            <li>Lam Nhat Minh</li>
                        </ol>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
