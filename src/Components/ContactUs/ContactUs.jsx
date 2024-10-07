import React from 'react'
import './ContactUs.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
  return (
    <div className="contact-us" ref={ref}>
      <motion.div className="contact-us-container"
       initial={{ opacity: 0, y: 0 }}
       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
       exit={{ opacity: 0, y: 0 }}
       transition={{ duration: 1 }}
      >
        <motion.div className="contact-us-container-text"
         initial={{ opacity: 0, y: 0 }}
         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
         exit={{ opacity: 0, y: 0 }}
         transition={{ duration: 1 }}
        >
          <p>contact us</p>
          <h1>STAY IN TOUCH</h1>
        </motion.div>
        <motion.form className="contact-us-container-form" 
         initial={{ opacity: 0, y: 0 }}
         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
         exit={{ opacity: 0, y: 0 }}
         transition={{ duration: 1 }}
        >
          <div className="contact-us-container-form-name-email">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="contact-us-container-form-phone">
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="contact-us-container-form-message">
            <input type="text" placeholder='Message' />
          </div>
          
          <div className="contact-us-container-send-message">
          <button>SEND MESSAGE</button>
        </div>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default ContactUs
