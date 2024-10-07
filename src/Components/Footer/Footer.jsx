import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import image1 from "../../Assets/Footer/image1.png";
import image2 from "../../Assets/Footer/image2.png";
import image3 from "../../Assets/Footer/image3.png";
import facebook from "../../Assets/Footer/facebook.png";
import whatsapp from "../../Assets/Footer/whatsapp.png";
import instagram from "../../Assets/Footer/instagram.png";
import logo from "../../Assets/Footer/Fusion Feast.png";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="footer" ref={ref}
    >
      <div className="footer-image"
      
      >
        <img src={images[currentImageIndex]} alt="Footer" />
      </div>
      <div className="footer-bg-black"></div>
      <div className="footer-container">
        <motion.div className="footer-container-left"
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: -200 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 1 }}
        >
          <div className="footer-container-left-title">
            <img src={logo} alt="Fusion Feast Logo" />
          </div>
          <p>No.123, Duplications Road, Colombo 04</p>
          <p>Email: resturant@fusion_feast.com</p>
          <p>Phone: +94 76 125 7751</p>
        </motion.div>
        <motion.div className="footer-container-middle"
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 1 }}
        >
          <h3>QUICK LINKS</h3>
          <ul className="quick-links">
            <div className="quick-links-container">
              <Link
                className="link-items-quick"
                to="/"
                style={{ textDecoration: "none" }}
              >
                <li>Home</li>
              </Link>
              <Link
                className="link-items-quick"
                to="/about"
                style={{ textDecoration: "none" }}
              >
                <li>About</li>
              </Link>
              <Link
                className="link-items-quick"
                to="/menu"
                style={{ textDecoration: "none" }}
              >
                <li>Menu</li>
              </Link>
              <Link
                className="link-items-quick"
                to="/reservation"
                style={{ textDecoration: "none" }}
              >
                <li>Reservation</li>
              </Link>
              <Link
                className="link-items-quick"
                to="/contact"
                style={{ textDecoration: "none" }}
              >
                <li>Contact</li>
              </Link>
              <Link
                className="link-items-quick"
                to="/cart"
                style={{ textDecoration: "none" }}
              >
                <li>myCart</li>
              </Link>
            </div>
          </ul>
        </motion.div>
        <motion.div className="footer-container-middle-middle"
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 1 }}>
          <h3>OPENING HOURS</h3>
          <p>MONDAY – THURSDAY</p>
          <p>12.00 – 3.30 PM & 6.30 -10.30 PM</p>
          <p>FRIDAY – SUNDAY</p>
          <p>12.00 – 3.30 PM & 6.30 -10.30 PM</p>
          <p>(Hours might differ)</p>
        </motion.div>
        <motion.div className="footer-container-right"
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: 200 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 1 }}
        >
          <h3>SUBSCRIBE</h3>
          <p>Subscribe to our newsletter to receive upcoming promotions and events at Fusion Feast.</p>
          <div className="footer-container-right-input">
            <input type="text" placeholder="Enter Email" />
            <button>SUBSCRIBE</button>
          </div>
        </motion.div>
      </div>
      <div className="footer-bottom">
        <hr />
        <div className="footer-bottom-items">
            <div className="footer-bottom-items-left">
                <p>2024 @ Fusion Feast All Rights Reserved</p>
            </div>
            <div className="footer-bottom-items-right">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={whatsapp} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
