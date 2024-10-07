import React, { useState, useEffect } from "react";
import "./HeroPage.css";
import heroImage1 from "../../Assets/Hero Images/HeroPage1.png";
import heroImage2 from "../../Assets/Hero Images/HeroPage2.png";
import heroImage3 from "../../Assets/Hero Images/HeroPage3.png";
import heroImage4 from "../../Assets/Hero Images/HeroPage4.png";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [heroImage1, heroImage2, heroImage3, heroImage4];

const HeroPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="hero-page" ref={ref}>
      <div className="hero-page-image-container">
        <img src={images[currentImageIndex]} alt="Hero" />
      </div>
      <motion.div className="hero-page-text-container" 
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>Experience the Rich Flavors of Authentic Sri Lankan Cuisine</p>
        <h1>FUSION FEAST</h1>
        <span>
          Delivering an Authentic Sri Lankan Culinary Journey to the Heart of
          Colombo.
        </span>
      </motion.div>
      <div className="hero-page-black-bg"></div>
    </div>
  );
};

export default HeroPage;
