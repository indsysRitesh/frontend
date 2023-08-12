
import './App.css';
import LoginPage from './component/User/LoginPage';
import RegistrationPage from './component/User/RegistrationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/User/HomePage';
import About from './component/User/About';
import Contact from './component/User/Contact';
import FAQ from './component/User/FAQ';
import WishList from './component/User/WishList';
import Blog from './component/User/Blog';
import BlogDetails from './component/User/BlogDetails';
import TermsAndConditions from './component/User/TermsAndConditions';
import ProductDetails from './component/User/ProductDetails';

import AdminLogin from './component/Admin/AdminLogin';
import AdminDashboard from './component/Admin/AdminDashboard';
import AdminUitiliy from './component/Admin/AdminUitiliy';
import AdminAllCustomer from './component/Admin/AdminAllCustomer';
import AdminAllProduct from './component/Admin/AdminAllProduct';
import AdminAddProduct from './component/Admin/AdminAddProduct';
import AdminCategory from './component/Admin/AdminCategory';
import AdminCalendar from './component/Admin/AdminCalendar';
import AdminOrder from './component/Admin/AdminOrder';
import AdminInvoices from './component/Admin/AdminInvoices';
import AdminContacts from './component/Admin/AdminContacts';
import AdminFooter from './component/Admin/AdminFooter';
import AdminHeader from './component/Admin/AdminHeader';
import AdminRegistration from './component/Admin/AdminRegistration';




import VenRegistration from './component/Vendors/VenRegistration';
import VenLogin from './component/Vendors/VenLogin';
import VenHeader from './component/Vendors/VenHeader';
import VenFooter from './component/Vendors/VenFooter';
import VenDashboard from './component/Vendors/VenDashboard';
import VenAddProduct from './component/Vendors/VenAddProduct';
import VenAllProduct from './component/Vendors/VenAllProduct';
import VenCategory from './component/Vendors/VenCategory';
import VenOrder from './component/Vendors/VenOrder';
import VenCalendar from './component/Vendors/VenCalendar';
import VenShopDetails from './component/Vendors/VenShopDetails';


import { Provider } from 'react-redux';
import store from './redux/store';
import VenBankDetails from './component/Vendors/VenBankDetails';
import VenProfile from './component/Vendors/VenProfile';




function App() {
  // const navigate = useNavigate();

  return (
    <>
      <BrowserRouter>

      <Provider store={store}>
     
        <Routes>


          <Route path='/' index element={<LoginPage />} />
          <Route path='/registrationpage' element={<RegistrationPage />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/termsandconditions' element={<TermsAndConditions />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogdetails' element={<BlogDetails />} />


          <Route path='/adminheader' element={<AdminHeader />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/adminallcustomer' element={<AdminAllCustomer />} />
          <Route path='/adminaddproduct' element={<AdminAddProduct />} />
          <Route path='/adminallproduct' element={<AdminAllProduct />} />
          <Route path='/admincategory' element={<AdminCategory />} />
          <Route path='/adminorder' element={<AdminOrder />} />
          <Route path='/admincalendar' element={<AdminCalendar />} />
          <Route path='/admininvoices' element={<AdminInvoices />} />
          <Route path='/admincontacts' element={<AdminContacts />} />
          <Route path='/adminfooter' element={<AdminFooter />} />
          <Route path='/adminuitiliy' element={<AdminUitiliy />} />
          <Route path='/adminregistration' element={<AdminRegistration />} />
          {/* <Route path='/alluser' element={<AllUser />} /> */}
        

          <Route path='/venlogin' element={<VenLogin />} />
          <Route path='/venheader' element={<VenHeader />} />
          <Route path='/venregistration' element={<VenRegistration />} />
          <Route path='/venshopdetails' element={<VenShopDetails/>} />
          <Route path='/venlogin' element={<VenLogin />} />
          <Route path='/venfooter' element={<VenFooter />} />
          <Route path='/vendashboard' element={<VenDashboard />} />
          <Route path='/venaddproduct' element={<VenAddProduct />} />
           <Route path='/venallproduct' element={<VenAllProduct />} />
          <Route path='/vencategory' element={<VenCategory />} />
          <Route path='/venorder' element={<VenOrder />} />
          <Route path='/vencalendar' element={<VenCalendar />} />
          <Route path='/venprofile' element={<VenProfile />} />
          <Route path='/venbankdetails' element={<VenBankDetails />} />


        </Routes>
      
        </Provider>







      </BrowserRouter>
    </>

  );
}

export default App;
