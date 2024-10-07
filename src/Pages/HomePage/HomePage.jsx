import React, { useEffect } from 'react';
import './HomePage.css';
import HeroPage from '../../Components/HeroPage/HeroPage';
import WhyFusion from '../../Components/WhyFusion/WhyFusion';
import MouthWateringMenu from '../../Components/MouthWateringMenu/MouthWateringMenu';
import OfferFlavours from '../../Components/OfferFlavours/OfferFlavours';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Reservation from '../../Components/Reservation/Reservation';
import ContactUs from '../../Components/ContactUs/ContactUs';
import OurValues from '../../Components/OurValues/OurValues';
import { motion } from 'framer-motion';

const HomePage = () => {
  useEffect(() => {
    
    window.scrollTo(0,0);
  }, []);

  return (
    <motion.div className='homepage'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <HeroPage />
      <WhyFusion />
      <MouthWateringMenu />
      <OfferFlavours />
      <Testimonials />
      <Reservation />
      <OurValues />
      <ContactUs />
    </motion.div>
  );
};

export default HomePage;
