import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import ReservationPage from './Pages/ReservationPage/ReservationPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import CartPage from './Pages/CartPage/CartPage';
import MenuPage from './Pages/MenuPage/MenuPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="reservation" element={<ReservationPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="menu" element={<MenuPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
