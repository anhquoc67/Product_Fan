import React from 'react';
import Video from './Video';

function FAQ() {
    return ( 
        <div>
            <h1 style={{ textAlign: 'center'}}> FAQ</h1>
            <div className="my-5">
                {/* Thêm hình ảnh phía trên phần câu hỏi */}
                <div className="text-center mb-4">
                    <div className="row justify-content-center">
                        {/* Hình ảnh 1 */}
                        <div className="col-md-4 mb-3">
                            <img 
                                src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729151972/faq1_rsfts0.jpg" 
                                alt="Customer Support Banner" // Thay đổi mô tả cho đúng
                                className="img-fluid" 
                                style={{ maxHeight: '200px', objectFit: 'cover', width: 'auto', borderRadius: '10px' }} 
                            />
                        </div>

                        {/* Hình ảnh 2 */}
                        <div className="col-md-4 mb-3">
                            <img 
                                src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729151971/faq2_p6zyas.png" 
                                alt="Product Delivery Example" // Thay đổi mô tả cho đúng
                                className="img-fluid" 
                                style={{ maxHeight: '200px', objectFit: 'cover', width: 'auto', borderRadius: '10px' }} 
                            />
                        </div>

                        {/* Hình ảnh 3 */}
                        <div className="col-md-4 mb-3">
                            <img 
                                src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729151970/faq3_bvkizt.jpg" 
                                alt="Fan Installation" // Thay đổi mô tả cho đúng
                                className="img-fluid" 
                                style={{ maxHeight: '200px', objectFit: 'cover', width: 'auto', borderRadius: '10px' }} 
                            />
                        </div>
                    </div>
                </div>

                <h3 style={{textAlign:'left'}}>How can I buy product?</h3>
                <p>
                    You can order directly through website, or by calling, chatting. We'll contact, deliver and offer cash on delivery or COD worldwide.
                </p>

                <h3 style={{textAlign:'left'}}>Does shop provide free shipping when shipping directly?</h3>
                <p>
                    We provide free shipping in Ho Chi Minh City. For area outside this zone, customers will be charged shipping fees based on the distance from the store, calculated per kilometer. 
                </p>

                <h3 style={{textAlign:'left'}}>Does shop install for customers?</h3>
                <p>
                    We offer installation support in entire country.
                </p>
                
                <h3 style={{textAlign:'left'}}>How do I maintain my fan?</h3>
                <p>
                To maintain your fan, regularly clean the grille and blades to remove dust. Additionally, you should check the motor and lubricate it if necessary to ensure the fan operates efficiently.
                </p>
                <h3 style={{textAlign:'left'}}>Is there a warranty for the products? </h3>
                <p>
                Yes, all our products come with a warranty ranging from 1 to 2 years depending on the type of fan.
                </p>

                <h3 style={{textAlign:'left'}}>What size fan is needed for a particular room? </h3>
                <p>
                Usually the ceiling fans come in two distinct sizes 42" for smaller rooms as well as 52" for larger rooms. There are some companies who also offer 56-60" fans for larger or commercial room setting and 30-36" fans for the smaller rooms. The most common size you get in ceiling fans online is 52" fan which can be perfect for every type of room.
                </p>

                <h3 style={{textAlign:'left'}}>Is It Important to Look for the Model With Speed Settings and Adjustable Height when buying a pedestal fan? </h3>
                <p>
                Yes, these two features must be there in your pedestal fan if you are looking for the best one. With the speed setting feature, you can set the speed according to your requirement and the outside temperature. And with the adjustable height feature, you can enjoy cool air at both low and even when you are sitting at a little height. With these two features, you can have control over how it leaves you every time you use it.
                </p>

                <h3 style={{textAlign:'left'}}>How to install all types of fans?</h3>
                <p>
                We have videos of how to install all types of fans. You can find in the video below.
                <Video url="https://www.youtube.com/watch?v=2sCynSlpFpM&pp=ygUZcGVkZXN0YWwgZmFuIGluc3RhbGxhdGlvbg%3D%3D" />
                <Video url="https://www.youtube.com/watch?v=LGwnX4Zhdfk&pp=ygUVd2FsbCBmYW4gaW5zdGFsbGF0aW9u" />
                <Video url="https://www.youtube.com/watch?v=OM3QvIjxSoI&pp=ygUYY2VpbGluZyBmYW4gaW5zdGFsbGF0aW9u" />
                <Video url="https://www.youtube.com/watch?v=tkFz8UD0cZI&pp=ygUYZXhoYXVzdCBmYW4gaW5zdGFsbGF0aW9u" />
                </p>
            </div>
        </div>
     );
}

export default FAQ;
