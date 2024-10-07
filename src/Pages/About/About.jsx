import React,{useEffect} from 'react'
import './About.css'
import WhyFusionFeast from '../../Components/WhyFusionFeast/WhyFusionFeast'
import OurValues from '../../Components/OurValues/OurValues'
import {motion} from 'framer-motion'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <motion.div className='about' initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}> 
      <WhyFusionFeast />
      <OurValues />
    </motion.div>
  )
}

export default About
