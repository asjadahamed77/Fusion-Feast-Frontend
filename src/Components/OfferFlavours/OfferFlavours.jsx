import React, { useState, useEffect } from 'react';
import './OfferFlavours.css';
import image1 from '../../Assets/Offer Flavour/image1.png';
import image2 from '../../Assets/Offer Flavour/image2.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OfferFlavours = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    const images = [image1, image2];
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='offer-flavours' ref={ref}>
      <div className="offer-flavours-image">
        <img src={currentImage} alt="Offer Flavour" />
      </div>
      <motion.div className="offer-flavours-text"
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: 200 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 1 }}
      >
        <p>we offer</p>
        <h1>WONDERFUL <br /> FLAVOURS</h1>
        <span>We invite you to sit down and savor your meal, just like you would enjoy your favorite homemade dishes. We’ve embarked on this culinary journey with passion, and we're delighted that you've taken the time to learn about our story and share in our experience.</span>
      </motion.div>
      <div className="offer-flavours-bg-black"></div>
    </div>
  );
};

export default OfferFlavours;
