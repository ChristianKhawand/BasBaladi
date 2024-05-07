import React from 'react';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import ShoppingCart from './pages/ShoppingCart';
import Products from './pages/Products';
import AboutUsPage from './pages/AboutUsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import axios from 'axios';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div className="App">
      <Toaster position="top-center" toastOptions={{duration:3000}} />
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;