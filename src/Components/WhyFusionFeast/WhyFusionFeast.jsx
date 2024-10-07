import React, { useState, useEffect } from 'react';
import './WhyFusionFeast.css';
import about1 from '../../Assets/About/about1.jpg';
import about2 from '../../Assets/About/about2.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyFusionFeast = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
  const [currentImage, setCurrentImage] = useState(about1);

  useEffect(() => {
    const images = [about1, about2];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='why-fusion-feast' ref={ref}>
      
      <div className="why-fusion-feast-container">
      <motion.div className="why-fusion-feast-image"
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
        <div className="why-fusion-feast-container-text">
          <h1>WHY <br />FUSION FEAST? </h1>
        </div>
        <div className="why-fusion-feast-container-about">
          <p>
            Designed to be the culinary epicenter, we uphold local traditions while highlighting Sri Lankan flavors using fresh, seasonal ingredients. We ensure the freshest farm produce reaches your table, emphasizing seasonal, locally sourced ingredients and the freshest seafood. From fiery curries to soothing buffalo curd, we bring beloved dishes with our unique twist. We proudly support local farm communities in Sri Lanka and create a homely ambiance for your dining experience. Our interior combines modern and vintage touches, offering a colonial-inspired, homey atmosphere. We want you to enjoy your meal as you would homemade dishes. We're glad you've taken the time to know our story and share in our journey. Thank you for your support; we couldn't have done it without you.
          </p>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyFusionFeast;
