import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AdminButton from './components/AdminButton/AdminButton';
import { AdminProvider } from './context/AdminContext';
import ShopContextProvider from './context/ShopContext';
import Cart from './pages/Cart';
import Shop from './pages/shop';
import Product from './pages/product';
import LoginSignup from './pages/LoginSignup';
import MenLuxury from './pages/MenLuxury';
import WomenLuxury from './pages/WomenLuxury';
import KidsLuxury from './pages/KidsLuxury';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import FAQ from './pages/FAQ';
import AdminLogin from './pages/AdminLogin';
import EnhancedAdminDashboard from './pages/EnhancedAdminDashboard';
import AdminAddProduct from './pages/AdminAddProduct';
import AdminEditProduct from './pages/AdminEditProduct';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AdminProvider>
      <ShopContextProvider>
        <BrowserRouter>
          <AdminButton />
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<MenLuxury />} />
            <Route path="/womens" element={<WomenLuxury />} />
            <Route path="/kids" element={<KidsLuxury />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<EnhancedAdminDashboard />} />
            <Route path="/admin/add-product" element={<AdminAddProduct />} />
            <Route path="/admin/edit-product/:id" element={<AdminEditProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </AdminProvider>
  );
}

export default App;
