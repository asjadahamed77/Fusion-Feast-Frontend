import React from "react";
import "./Reservation.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Reservation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
  return (
    <div className="reservation" ref={ref}>
      <motion.div className="reservation-container"
       initial={{ opacity: 0, y: 0 }}
       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: -200 }}
       exit={{ opacity: 0, y: 0 }}
       transition={{ duration: 0.5 }}
      >
        <div className="reservation-container-text">
          <p>reservation</p>
          <h1>BOOK A TABLE</h1>
        </div>
        <motion.form className="reservation-container-form"
         initial={{ opacity: 0, y: 0 }}
         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
         exit={{ opacity: 0, y: 0 }}
         transition={{ duration: 1 }}
        >
          <div className="reservation-container-form-name-email">
            <input type="text" placeholder="Your Name*" required />
            <input type="email" placeholder="Email Address*" required />
          </div>
          <div className="reservation-container-form-phone">
            <input type="tel" placeholder="Phone Number*" required />
            <input type="text" placeholder="Message*" required />
          </div>
          <div className="reservation-container-form-date-time">
            <input type="date" placeholder="MM/DD/YYYY" required />
            <input type="text" placeholder="Time*" required />
          </div>
          <div className="reservation-container-form-table">
            <label htmlFor="">Number of Tables:</label>
            <select name="" id="" required>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
          </div>
          <div className="reservation-container-book-now">
          <button>BOOK NOW</button>
        </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Reservation;
