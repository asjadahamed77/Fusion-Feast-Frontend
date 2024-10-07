import React,{useEffect} from 'react'
import './ContactPage.css'
import ContactUs from '../../Components/ContactUs/ContactUs'
import {motion} from 'framer-motion'
const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <motion.div className='contact-page' initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}>
      <ContactUs />
    </motion.div>
  )
}

export default ContactPage
