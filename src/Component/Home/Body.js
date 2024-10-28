
import Banner from "./Banner";
import FeaturedProduct from "./FeaturedProduct";
import FeedBack from "./FeedBack";
import { Routes, Route } from 'react-router-dom'




function Body() {
    return (
        <div>
            <Banner />
            <Routes>
                <Route path='/' index element={<FeaturedProduct />} />
            </Routes>
            <FeedBack />
        </div>
    );
}

export default Body;