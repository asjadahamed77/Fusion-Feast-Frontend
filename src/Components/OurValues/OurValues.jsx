import React from "react";
import "./OurValues.css";
import authentic from '../../Assets/Values/authentic.png'
import variety from '../../Assets/Values/variety.png'
import ingredience from '../../Assets/Values/ingredience.png'
import ambiance from '../../Assets/Values/ambiance.png'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const OurValues = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
  return (
    <div className="our-values" ref={ref}>
      <motion.div className="our-values-text"
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>some of</p>
        <h1>OUR VALUES</h1>
      </motion.div>
      <motion.div className="our-values-containers" 
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 1 }}
      >
        <div className="our-values-container"
          
        >
            <img src={authentic} alt="" />
          <span>AUTHENTICALLY SRI LANKAN</span>
        </div>
        <div className="our-values-container">
            <img src={variety} alt="" />
          <span>MENU VARIETY</span>
        </div>
        <div className="our-values-container">
            <img src={ingredience} alt="" />
          <span>100% FRESH INGREDIENTS</span>
        </div>
        <div className="our-values-container">
            <img src={ambiance} alt="" />
          <span>AMBIANCE</span>
        </div>
      </motion.div>
    </div>
  );
};

export default OurValues;
