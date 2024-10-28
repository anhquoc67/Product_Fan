import './App.css';
import Header from './Component/Header';
import ScrollToTop from './Component/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import Body from './Component/Home/Body';
import Login from './Component/Account/Login';
import FeedBack from './Component/Home/FeedBack';
import AboutUs from './Component/AboutUs';
import Register from './Component/Account/Register';
import ContactUs from './Component/ContactUs';
import Footer from './Component/Footer';
import Gallery from './Component/Gallery';
import FAQ from './Component/FAQ';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import BestSell from './Component/BestSell';
import './Style/BestSell.css';
import CeilingFan from './Component/Product/CeilingFan';
import PedestalFan from './Component/Product/PedestalFan';
import WallFan from './Component/Product/WallFan';
import ExhaustFan from './Component/Product/ExhaustFan';
import Accessories from './Component/Product/Accessories';
import './Style/Fan.css';
import './json/CeilingFan.json';
import './json/BestSell.json';
import VisitorCounter from './Component/VisitorCounter';
import SiteMapModal from './Component/SiteMapModal';
import './Style/DayTimeLocation.css';
import DayTimeLocation from './Component/DayTimeLocation';

function App() {
  return (
    <div className="App">
      <VisitorCounter />
      <ScrollToTop /> 
      <Header />
      <DayTimeLocation />
      <div style={{ margin: '10px 5vw 10px 5vw'}}>
        <Routes>
          <Route path='/' index element={<Body />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path='/Feedback' element={<FeedBack />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path='/BestSell' element={<BestSell />} />
          <Route path='/CeilingFan' element={<CeilingFan />} />
          <Route path='/PedestalFan' element={<PedestalFan />} />
          <Route path='/WallFan' element={<WallFan />} />
          <Route path='/ExhaustFan' element={<ExhaustFan />} />
          <Route path='/Accessories' element={<Accessories />} />
          <Route path='*' element={<Body />} />
        </Routes>
      </div>
      
      <SiteMapModal />
      <Footer style={{margin: 0}} />
    </div>
  );
}

export default App;
