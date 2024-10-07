import React, { useState, useEffect } from 'react';
import './TraditionalSriLankanDishes.css'
import reservation1 from '../../Assets/Reservation/reservation1.jpg'
import reservation2 from '../../Assets/Reservation/reservation2.jpg'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const TraditionalSriLankanDishes = () => {

  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
    const [currentImage, setCurrentImage] = useState(reservation1);

  useEffect(() => {
    const images = [reservation1, reservation2];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='traditional-dishes' ref={ref}>
      
    <div className="traditional-dishes-container">
    <motion.div className="traditional-dishes-image"
    initial={{ opacity: 0, y: 0 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: -200 }}
    exit={{ opacity: 0, y: 0 }}
    transition={{ duration: 1 }}
    >
      <img src={currentImage} alt="Fusion Feast" />
    </motion.div>
      <motion.div className="fusion-feast-right"
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: 200 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 1 }}
      >
      <div className="traditional-dishes-container-text">
        <p>its time to enjoy</p>
        <h1>TRADITIONAL<br />SRI LANKAN DISHES</h1>
      </div>
      <div className="traditional-dishes-container-about">
        <p>We accept reservations for both lunch and dinner. To book a table, please call us between 10 am and 6 pm, Monday to Friday.</p>
        <p>Our bar area operates on a first-come, first-served basis, ensuring availability for walk-in guests without reservations.</p>
        <p>Contact us at +94 76 125 7751 or +94 72 394 1906</p>
      </div>
      </motion.div>
    </div>
  </div>
  )
}

export default TraditionalSriLankanDishes
